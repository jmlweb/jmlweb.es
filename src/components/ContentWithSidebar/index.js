import React from 'react';
import PT from 'prop-types';

import Wrapper from './components/Wrapper';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

const ContentWithSidebar = ({ content, sidebar }) => (
  <Wrapper>
    <Content vertical>{content}</Content>
    <Sidebar>{sidebar}</Sidebar>
  </Wrapper>
);

ContentWithSidebar.propTypes = {
  content: PT.node.isRequired,
  sidebar: PT.node.isRequired,
};

export default ContentWithSidebar;
