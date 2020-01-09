import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import styles from './home-intro.module.css';

import SocialLinks from '../../social-links';

const HomeIntro = ({ broken, setBroken }) => {
  const [ref, inView] = useInView({
    threshold: 0.05,
  });
  return (
    <section
      className={classNames({
        [styles.homeIntro]: true,
        [styles.broken]: broken,
      })}
      ref={ref}
    >
      <div
        className={classNames({
          [styles.content]: true,
          [styles.invisible]: inView === false,
        })}
      >
        <h1
          className={classNames({
            [styles.title]: true,
            [styles.broken]: broken,
          })}
        >
          <span>My name is</span> José Manuel Lucas
        </h1>
        <p className={styles.subtitle}>
          I love to{' '}
          <button
            onClick={() => setBroken(true)}
            className={classNames({
              [styles.anim]: !broken,
            })}
          >
            break
          </button>{' '}
          and{' '}
          <button
            onClick={() => setBroken(false)}
            className={classNames({
              [styles.anim]: broken,
            })}
          >
            fix
          </button>{' '}
          things
        </p>
        <p
          className={classNames({
            [styles.lead]: true,
            [styles.broken]: broken,
          })}
        >
          I’m a front-end engineer who <a href="/blog">writes</a> and&nbsp;
          <a href="/talks">talks</a> about modern web development, especially
          about React, JavaScript Functional Programming, Testing, and UI
          Design.
        </p>
        <aside className={styles.socialLinks}>
          <SocialLinks />
        </aside>
      </div>
    </section>
  );
};

export default HomeIntro;
