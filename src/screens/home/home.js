import React from 'react';

import { Page } from '../../components';
import HomeIntro from './home-intro';
import HomeBlog from './home-blog';
import HomeTalks from './home-talks';
import HomeProjects from './home-projects';

const Home = ({ blogPosts, talksPosts, projectsPosts }) => (
  <Page title="Home">
    <HomeIntro />
    <HomeBlog posts={blogPosts} />
    <HomeTalks posts={talksPosts} />
    <HomeProjects posts={projectsPosts} />
  </Page>
);

export default Home;
