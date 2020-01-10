import React, { lazy } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Header from '../../header';
import Seo from '../../seo';
import Footer from '../../footer';
import styles from './blog-post.module.css';

import MainImg from '../../main-img';
import SharePost from './share-post-loader';

lazy(() => import('../../../css/prism.css'));

const BlogPost = ({ post }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `,
  );
  const rawTagsStr = post.frontmatter.tags.join(', ');
  const parsedTagsStr = post.frontmatter.tags.map(tag => `#${tag}`).join(' ');
  return (
    <div className={styles.blogPost}>
      <Seo
        title={post.frontmatter.title}
        description={`Article about ${rawTagsStr} | José Manuel Lucas. Frontend Engineer`}
      />
      <Header />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.frontmatter.title}</h1>
          <div className={styles.headerExtra}>
            <time dateTime={post.frontmatter.rawDate} className={styles.date}>
              {post.frontmatter.date}
            </time>
            <span className={styles.readingTime}>
              Reading time: <strong>{post.timeToRead} min</strong>
            </span>
            <span>{parsedTagsStr}</span>
          </div>
        </header>
        <div className={styles.content}>
          <h2 className={styles.lead}>{post.frontmatter.subtitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <SharePost
            postUrl={`${site.siteMetadata.siteUrl}/${post.fields.slug}`}
            postTitle={post.frontmatter.title}
            postSubtitle={post.frontmatter.subtitle}
            siteUrl={site.siteMetadata.siteUrl}
            tags={parsedTagsStr}
          />
        </div>
      </main>
      <Footer />
      <MainImg />
    </div>
  );
};

export default BlogPost;
