import React from 'react';

import styles from './info.module.css';
import ExternalLink from '../../external-link';
import StandardPage from '../../standard-page';

const Info = ({ posts, currentPage, numPages }) => (
  <StandardPage title="Info" description="Info about José Manuel Lucas. Spanish Frontend Engineer specialized in React, Styled Components and GraphQL">
    <div className={styles.bioWrapper}>
      <div className={styles.bio}>
        <h2>I'm José Manuel Lucas</h2>
        <p>
          A frontend engineer living in <strong>Murcia (Spain)</strong>
        </p>
        <p>
          I have ample experience building <strong>performant</strong> yet
          pleasant to see <strong>websites</strong>.
        </p>
        <p>
          I work for <ExternalLink href="http://sewan.fr">Sewan</ExternalLink>,
          a French telecommunications company, building interfaces using the
          latest technologies, like <strong>React</strong>,{' '}
          <strong>Styled Components</strong>, <strong>GraphQL</strong> and{' '}
          <strong>Node</strong>.
        </p>
        <p>
          My interests are very eclectic, covering areas like{' '}
          <strong>Functional Programming</strong>,{' '}
          <strong>Design Systems</strong>, <strong>UI Design</strong>,{' '}
          <strong>Mountain Biking</strong>, and <strong>Hip Hop Music</strong>.
        </p>
      </div>
      <div className={styles.bio}>
        <h2>Technologies</h2>
        <dl className={styles.techList}>
          <dt>HTML</dt>
          <dd>
            My Markup is <strong>semantic</strong> and{' '}
            <strong>accessible</strong>.
          </dd>
          <dt>CSS</dt>
          <dd>
            I've been working with CSS for more than 12 years. I take advantage
            of the latest additions to the standard to build{' '}
            <strong>beautiful</strong> and <strong>usable</strong> interfaces.
          </dd>
          <dt>JS</dt>
          <dd>
            My favorite language, with its draws and cons. My code implements
            the best conventions like <strong>TDD</strong>,{' '}
            <strong>Solid</strong>... I'm specialized in building highly{' '}
            <strong>optimized</strong>, <strong>testable</strong>, and{' '}
            <strong>modular</strong> components using <strong>React</strong>. My
            style components usually follow the <strong>System UI</strong>{' '}
            standard.
          </dd>
          <dt>Other</dt>
          <dd>
            Mongo, MySQL, Node, PHP, Shell Scripting, Firebase, WordPress, p5.js
          </dd>
        </dl>
      </div>
    </div>
  </StandardPage>
);

export default Info;
