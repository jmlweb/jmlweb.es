import React from 'react';

import StandardPage from '../../standard-page';
import ContentGrid from '../../content-grid';
import ContentItem from '../../content-item';
import Pagination from '../../pagination';

const ProjectsList = ({ posts, currentPage, numPages }) => (
  <StandardPage title="Personal & Open Source Projects" description="Projects developed by José Manuel Lucas">
    <ContentGrid>
      {posts.map(({ node }) => (
        <ContentItem
          key={node.id}
          title={node.frontmatter.title}
          link={node.frontmatter.url}
          subtitle={node.excerpt}
          extra={
            <a
              href={node.frontmatter.url}
              rel="external noopener noreferrer"
              target="_blank"
            >
              {node.frontmatter.url}
            </a>
          }
          external
        />
      ))}
    </ContentGrid>
    <Pagination
      prefix="projects"
      currentPage={currentPage}
      numPages={numPages}
    />
  </StandardPage>
);

export default ProjectsList;
