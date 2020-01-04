import React from 'react';

import StandardPage from '../../standard-page';
import ContentGrid from '../../content-grid';
import ContentItem from '../../content-item';
import ExternalLink from '../../external-link';
import Pagination from '../../pagination';

const TalksList = ({ futureTalks, pastTalks, currentPage, numPages }) => (
  <StandardPage
    title={futureTalks.length ? 'Future & past talks' : 'Past talks'}
    htmlTitle={
      <>{futureTalks.length ? 'Future &' : <del>Future &</del>} past talks</>
    }
  >
    <ContentGrid>
      {futureTalks.map(({ node }) => (
        <ContentItem
          key={node.id}
          title={`⏰ ${node.frontmatter.conference}`}
          link={node.frontmatter.url}
          subtitle={node.frontmatter.title}
          lang={node.frontmatter.language}
          extra={
            <time dateTime={node.frontmatter.rawDate}>
              {node.frontmatter.date}
            </time>
          }
          external
        />
      ))}
      {pastTalks.map(({ node }) => (
        <ContentItem
          key={node.id}
          title={node.frontmatter.conference}
          link={node.frontmatter.url}
          subtitle={node.frontmatter.title}
          lang={node.frontmatter.language}
          extra={
            <>
              <time dateTime={node.frontmatter.rawDate}>
                {node.frontmatter.date}
              </time>
              {node.frontmatter.type === 'workshop' && (
                <span style={{ opacity: 0.5 }}>*workshop</span>
              )}
              {node.frontmatter.slides && (
                <ExternalLink href={node.frontmatter.slides}>
                  Slides
                </ExternalLink>
              )}
              {node.frontmatter.video && (
                <ExternalLink href={node.frontmatter.video}>Video</ExternalLink>
              )}
              {node.frontmatter.demo && (
                <ExternalLink href={node.frontmatter.demo}>Demo</ExternalLink>
              )}
            </>
          }
          external
        />
      ))}
    </ContentGrid>
    <Pagination prefix="talks" currentPage={currentPage} numPages={numPages} />
  </StandardPage>
);

export default TalksList;
