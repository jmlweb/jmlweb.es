---
title: 'Markdown multi-content site with Gatsby'
subtitle: 'Use a folder structure plus Gatsby API to generate your archive and post pages automatically'
date: '2019-11-28'
tags: ['gatsby', 'markdown', 'tutorial']
published: true
---

[Gatsby](https://www.gatsbyjs.org/) is a static site generator based on [React](https://reactjs.org/) with much popularity nowadays.

The list of sites powered by Gatsby is awe-inspiring:

- [ReactJS](https://reactjs.org/)
- [Airbnb Engineering](https://airbnb.io/)
- [Braun](https://ca.braun.com/en-ca)
- My website 😂

One of its most definite advantages is the ability to **obtain content from many different sources**:

- Wordpress API
- Contentful
- Markdown files

In this article, we will focus on the last one to build a page with separated sections organized by folders containing the different types of posts (**blog**, **projects**, and **talks**).

## Files hierarchy

```
-src
|
----blog
|
--------some-blog-post.md
|
----projects
|
--------some-project-post.md
|
----talks
|
--------some-talk-post.md
```

## Configuration

To **fetch data from the file system**, we need to use a plugin called [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/).

After fetching the data, we need to **convert the Markdown to valid HTML**. For that, we are going to use [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark).

After installing the packages with `npm` or `yarn`, the next step is to configure Gatsby to read from each one of the content folders and parse the Markdown files:

```js
module.exports = {
  // siteMetadata...
  plugins: {
    // ...
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/projects`,
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/talks`,
        name: 'talks',
      },
    },
    `gatsby-transformer-remark`,
    //...
  }
}
```

## Templates

For each **section**, we want to define a **template** for the posts list and optionally one for the post detail (the links for the talks and projects are external, so only the blog has detail page).

### List page example

```jsx
// src/templates/blog-list.js
import React from 'react';
import { graphql } from 'gatsby';

import { BlogList } from '../components/scenes';

export default ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  return (
    <BlogList
      posts={data.allMarkdownRemark.edges}
      currentPage={currentPage}
      numPages={numPages}
    />
  );
};

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "blog" } }
        frontmatter: { published: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            tags
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
```

Let's analyze what's happening here:

1. We **query** all the Markdown content, filtering by collection (blog).
2. We also filter by published state. That way, we can include a flag in the [frontmatter](https://www.gatsbyjs.org/docs/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) to mark the file as "unpublished."
3. We add **pagination** ability. We are going to generate proper information later.
4. We pass the edges of the data, as well as the pagination information to a **"functional" component**, which renders the information correctly.

### Detail page example

```jsx
import React from 'react';
import { graphql } from 'gatsby';

import { BlogPost } from '../components/scenes';

export default ({ data }) => {
  const post = data.markdownRemark;
  return <BlogPost post={post} />;
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        rawDate: date
        date(formatString: "DD MMMM YYYY")
      }
      timeToRead
      html
    }
  }
`;
```

This case is even simpler, as there is no pagination or collection type involved. The query receives **a slug as parameter**. The data is passed then to a functional component.

## Pages generation

Now, we need to update `gatsby-node.js`, to read for the separated content files in the proper directories.

To maintain our file clean, we are going to create a folder called `gatsby`, with two files inside: `create-pages.js` and `on-create-node.js`.

```
-gatsby
----create-pages.js
----on-create-node.js
-gatsby-node.js
```

### gatsby-node.js

```js
exports.onCreateNode = require('./gatsby/on-create-node');
exports.createPages = require('./gatsby/create-pages');
```

### on-create-node.js

```js
const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const collection = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });
    createNodeField({
      node,
      name: `slug`,
      value: `/${collection}${slug}`,
    });
  }
};
```

With this hook, we are telling Gatsby to add two new fields when the node is created. We can access those fields later with GraphQL, to filter the pages by collection and to obtain the detail for a determined slug (which includes the collection).

### create-pages.js

```js
// create-pages.js
const COLLECTIONS = [
  {
    name: 'blog',
    postsPerPage: 12,
    hasPostPage: true,
  },
  {
    name: 'talks',
    postsPerPage: 12,
    hasPostPage: false,
  },
  {
    name: 'projects',
    postsPerPage: 12,
    hasPostPage: false,
  },
];

const filterEdges = name => edges =>
  edges.filter(edge => edge.node.fields.collection === name);

const buildPagesCollectionGenerator = ({ edges, createPage }) => ({
  name,
  postsPerPage,
  hasPostPage,
}) => {
  const filteredEdges = filterEdges(name)(edges);

  /**
   * CREATE INDIVIDUAL ITEMS
   */
  if (hasPostPage) {
    filteredEdges.forEach((edge, index) => {
      const { slug } = edge.node.fields;
      const previous =
        index === edges.length - 1 ? null : edges[index + 1].node;
      const next = index === 0 ? null : edges[index - 1].node;
      createPage({
        path: slug,
        component: require.resolve(`../src/templates/${name}-post.js`),
        context: { slug, previous, next },
      });
    });
  }

  /**
   * CREATE ITEMS LISTS
   */
  const numPages = Math.ceil(filteredEdges.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, idx) => {
    const currentPage = idx + 1;
    createPage({
      path: idx === 0 ? `/${name}` : `/${name}/${currentPage}`,
      component: require.resolve(`../src/templates/${name}-list.js`),
      context: {
        limit: postsPerPage,
        skip: idx * postsPerPage,
        numPages,
        currentPage,
      },
    });
  });
};

module.exports = async function({ actions, graphql }) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { ne: false } } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              collection
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const pagesCollectionGenerator = buildPagesCollectionGenerator({
    edges: data.allMarkdownRemark.edges,
    createPage,
  });

  COLLECTIONS.forEach(pagesCollectionGenerator);
};
```

Let's analyze what's happening in this hook:

1. We **query** all the **Markdown** content, excluding the unpublished items.
2. For each type of content, we run a collection **generator**, which filters the content by type and creates the proper pages using the templates.

Note that we can define for each collection:

- How many items we want to display in each page
- If the collection must render individual detail pages

## Real example

As I said previously, I've used this technique to build this page, so [feel free to inspect the files](https://github.com/jmlweb/jmlweb.es) to see a complete example.
