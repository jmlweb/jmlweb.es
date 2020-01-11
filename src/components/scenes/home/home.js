import React, { useState } from 'react';
import classNames from 'classnames';

import Header from '../../header';
import Seo from '../../seo';
import Footer from '../../footer';
import HomeIntro from './home-intro';
import HomeTalks from './home-talks';
import HomePosts from './home-posts';
import HomeProjects from './home-projects';
import MainImg from '../../main-img';

import styles from './home.module.css';

const Home = ({ blogPosts, talksPosts, projectsPosts }) => {
  const [broken, setBroken] = useState(false);
  return (
    <div
      className={classNames({
        [styles.home]: true,
        [styles.broken]: broken,
      })}
    >
      <Seo
        title="jmlweb | Frontend Engineer"
        description="Personal site of Frontend Engineer José Manuel Lucas. React, Javascript, Testing, Functional Programming, Design, and more"
      />
      <Header />
      <main className={styles.main}>
        <HomeIntro broken={broken} setBroken={setBroken} />
        <HomeTalks posts={talksPosts} />
        <HomePosts posts={blogPosts} />
        <HomeProjects posts={projectsPosts} />
      </main>
      <Footer />
      <MainImg />
    </div>
  );
};

export default Home;
