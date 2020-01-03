import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '../../components';

import styles from './home-intro.module.css';

const HomeIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jose-manuel-lucas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 212) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className={styles.wrapper}>
      <Container>
        <section className={styles.grid}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              My name is <span>José Manuel Lucas</span>
            </h1>
            <p className={styles.subtitle}>
              I love to{' '}
              <span className={styles.break}>
                break <span role="decoration">break</span>
                <span role="decoration">break</span>
                <span role="decoration">break</span>
                <span role="decoration">break</span>
              </span>{' '}
              and fix things
            </p>
          </header>
          <div className={styles.msg}>
            <p>
              I’m a front-end engineer who <Link to="/blog">writes</Link>{' '}
              and&nbsp;
              <Link to="/talks">talks</Link> about modern web development,
              especially about React, JavaScript Functional Programming,
              Testing, and UI Design.
            </p>
          </div>
          <div className={styles.img}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomeIntro;
