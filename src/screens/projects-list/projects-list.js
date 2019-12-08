import React from 'react';
import { Link } from 'gatsby';

import { Page } from '../../components';

const ProjectsList = ({ posts }) => (
  <Page title="Projects">
    <h1>Projects</h1>
    {posts.map(({ node }) => (
      <article key={node.frontmatter.url}>
        <h2>
          <a href={node.frontmatter.url} rel="external" target="_blank">
            {node.frontmatter.title}
          </a>
        </h2>
        <p>{node.excerpt}</p>
        <p>
          <a href={node.frontmatter.url} rel="external" target="_blank">
            {node.frontmatter.url}
          </a>
        </p>
      </article>
    ))}
    <div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Page>
);

export default ProjectsList;
