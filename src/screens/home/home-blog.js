import React from 'react';
import { Link } from 'gatsby';

import style from './home-blog.module.css';

const HomeBlog = ({ posts }) => (
  <section>
    <h2>Posts</h2>
    {posts.map(({ node }) => (
      <article key={node.id}>
        <h3>
          <Link className={style.blockLink} to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        </h3>
        <p>{node.excerpt}</p>
        <p>
          <Link to={node.fields.slug}>Read</Link>
        </p>
      </article>
    ))}
  </section>
);

export default HomeBlog;
