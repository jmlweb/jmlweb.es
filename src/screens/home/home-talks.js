import React from 'react';

const HomeTalks = ({ posts }) => (
  <section>
    <h2>Talks</h2>
    {posts.map(({ node }) => (
      <article key={node.id}>
        <h3>
          <a href={node.frontmatter.url} rel="external" target="_blank">
            {node.frontmatter.title}
          </a>
        </h3>
        <p>{node.excerpt}</p>
        <p>
          <a href={node.frontmatter.url} rel="external" target="_blank">
            {node.frontmatter.url}
          </a>
        </p>
      </article>
    ))}
  </section>
);

export default HomeTalks;
