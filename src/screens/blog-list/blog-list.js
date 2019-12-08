import React from 'react';
import { Link } from 'gatsby';

import { Page, Pagination } from '../../components';

const BlogList = ({ posts, currentPage, numPages }) => (
  <Page title="Blog">
    <h1>Blog</h1>
    {posts.map(({ node }) => (
      <article key={node.fields.slug}>
        <h2>
          <Link to={node.fields.slug}>
            {node.frontmatter.title || node.fields.slug}
          </Link>
        </h2>
        <p>{node.excerpt}</p>
        <p>
          <Link to={node.fields.slug}>Read</Link>
        </p>
      </article>
    ))}
    <Pagination prefix="blog" currentPage={currentPage} numPages={numPages} />
    <div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Page>
);

export default BlogList;
