import React from 'react';
import PT from 'prop-types';

import Wrapper from './components/Wrapper';
import Heading from './components/Heading';
import ReadMore from './components/ReadMore';
import Content from './components/Content';

const Article = ({ id, title, children }) => (
  <Wrapper>
    <Heading id={id} title={title} />
    <Content>
      <div
        key="content"
        dangerouslySetInnerHTML={{
          __html: children,
        }}
      />
    </Content>
    <ReadMore title={title} />
  </Wrapper>
);

Article.propTypes = {
  id: PT.string.isRequired,
  title: PT.string.isRequired,
  children: PT.node.isRequired,
};

export default Article;
