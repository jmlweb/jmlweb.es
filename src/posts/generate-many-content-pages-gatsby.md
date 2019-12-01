---
title: 'Creating a multicontent site with Gatsby'
date: '2019-11-28'
---

[Gatsby](https://www.gatsbyjs.org/) is a static site generator based on React with a lot of popularity nowadays. In fact, the React documentation is built using this technology, along with the sites of many other big names (like me 😂).

As you can see, this website includes some dynamic content (blog, talks and projects), using markdown files as store.

The content is separated by folders, using this structure:

```
-src
|
----posts
|
--------some-post.md
|
----projects
|
--------some-project.md
|
----talks
|
--------some-talk.md
```

## Configuration

To read the files we need to add `gatsby-source-filesystem` plugin, and modify `gatsby-config.js` to let Gatsby know about our new types. For each one, we include the `path`, and the `name`.

To generate the content, we'll use `gatsby-transformer-remark`.

```js
module.exports = {
  // siteMetadata...
  plugins: {
    // ...
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/talks`,
        name: 'talks',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    `gatsby-transformer-remark`,
    //...
  }
}
```

## Templates

Then, we need to add basic templates for each type of content:

```
-src
|
----templates
|
--------post.js
--------project.js
--------talk.js
```

It's important to keep things simple, we just want to know if things are going well:

```jsx
import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <div>POST TYPE</div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
```

## Pages generation

Now, we need to update `gatsby-node.js`. To maintain our file clean, we are going to create a folder called `gatsby`, with two files inside: `create-pages.js` and `on-create-node.js`.

```
-gatsby
----create-pages.js
----on-create-node.js
-gatsby-node.js
```

**gatsby-node.js**

```js
exports.onCreateNode = require('./gatsby/on-create-node');
exports.createPages = require('./gatsby/create-pages');
```

**on-create-node.js**

```js
const { createFilePath } = require(`gatsby-source-filesystem`);
module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: 'collection',
      value: getNode(node.parent).sourceInstanceName,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
```

**create-pages.js**

```js
// create-pages.js
const COLLECTIONS = [
  {
    name: 'posts',
    templateName: 'post',
  },
  {
    name: 'talks',
    templateName: 'talk',
  },
];

const filterEdges = name => edges =>
  edges.filter(edge => edge.node.fields.collection === name);

const buildPagesCollectionGenerator = ({ edges, createPage }) => ({
  name,
  templateName,
}) => {
  const filteredEdges = filterEdges(name)(edges);
  filteredEdges.forEach((edge, index) => {
    const { slug } = edge.node.fields;
    const previous = index === edges.length - 1 ? null : edges[index + 1].node;
    const next = index === 0 ? null : edges[index - 1].node;
    createPage({
      path: slug,
      component: require.resolve(`../src/templates/${templateName}.js`),
      context: { slug, previous, next },
    });
  });
};

module.exports = async function({ actions, graphql }) {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
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
