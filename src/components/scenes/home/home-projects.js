import React from 'react';

import ContentItem from '../../content-item';
import HomeSection from './home-section';

const HomeProjects = ({ posts }) => (
  <HomeSection title="Featured Projects">
    {posts.map(({ node }) => (
      <ContentItem
        key={node.id}
        title={node.frontmatter.title}
        link={node.frontmatter.url}
        subtitle={node.excerpt}
        extra={
          <a href={node.frontmatter.url} rel="external" target="_blank">
            {node.frontmatter.url}
          </a>
        }
        external
      />
    ))}
  </HomeSection>
);

export default HomeProjects;
