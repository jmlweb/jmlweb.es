import React from 'react';

import ContentItem from '../../content-item';
import HomeSection from './home-section';

const HomePosts = ({ posts }) => (
  <HomeSection title="Latest articles">
    {posts.map(({ node }) => (
      <ContentItem
        key={node.id}
        title={node.frontmatter.title}
        subtitle={node.frontmatter.subtitle || node.excerpt}
        link={node.fields.slug}
        extra={
          <>
            <span>{`${node.timeToRead} minutes`}</span>{' '}
            {node.frontmatter.tags.map(tag => (
              <span key={tag} style={{ opacity: 0.6 }}>
                {tag}
              </span>
            ))}
          </>
        }
        small
      />
    ))}
  </HomeSection>
);

export default HomePosts;
