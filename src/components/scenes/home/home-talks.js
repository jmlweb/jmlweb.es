import React from 'react';

import ContentItem from '../../content-item';
import HomeSection from './home-section';

const HomeTalks = ({ posts }) => {
  if (!posts.length) {
    return null;
  }
  return (
    <HomeSection title="Next Talks">
      {posts.map(({ node }) => (
        <ContentItem
          key={node.id}
          title={node.frontmatter.conference}
          link={node.frontmatter.url}
          subtitle={node.frontmatter.title}
          extra={
            <time dateTime={node.frontmatter.rawDate}>
              {node.frontmatter.date}
            </time>
          }
          external
        />
      ))}
    </HomeSection>
  );
};

export default HomeTalks;
