import React from 'react';
import { Page } from '../../components';

const BlogPost = ({ post }) => (
  <Page title={post.frontmatter.title}>
    <h1>{post.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </Page>
);

export default BlogPost;
