import React from 'react';
import PT from 'prop-types';

import Wrapper from './components/Wrapper';
import Article from './components/Article';

const ArticlesList = ({ data, mini }) => (
  <Wrapper mini={mini}>
    {data.map(item => item.node).map(node => <Article mini={mini} key={node.id} data={node} />)}
  </Wrapper>
);

ArticlesList.propTypes = {
  data: PT.arrayOf(PT.shape({
    node: PT.object,
  })).isRequired,
  mini: PT.bool,
};

ArticlesList.defaultProps = {
  mini: false,
};

export default ArticlesList;
