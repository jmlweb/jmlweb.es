import React from 'react';
import PT from 'prop-types';

import Article from '../Article';
import Wrapper from './components/Wrapper';

const ArticleList = ({ items }) => (
  <Wrapper>
    {items.map(item => (
      <Article key={item.id} id={item.id} title={item.title}>
        {item.content}
      </Article>
    ))}
  </Wrapper>
);

ArticleList.propTypes = {
  items: PT.arrayOf(PT.shape({
    id: PT.string,
    title: PT.string,
    content: PT.string,
  })).isRequired,
};

export default ArticleList;
