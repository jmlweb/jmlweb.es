import React from 'react';

import ContentItem from '../../content-item';
import HomeSection from './home-section';

const HomePosts = ({ posts }) => (
  <HomeSection title="Latest articles">
    {posts.map(({ node }) => (
      <ContentItem
        key={node.id}
        title={node.frontmatter.title}
        link={node.fields.slug}
        extra={`${node.timeToRead} minutes`}
      />
    ))}
  </HomeSection>
);

export default HomePosts;
