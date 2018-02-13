import React from 'react';
import PT from 'prop-types';

import ContentWithSidebar from '../../../ContentWithSidebar';
import ArticlesList from '../../../ArticlesList';

const Articles = ({ data }) => {
  const [featuredArticle, ...normalArticles] = data;
  return (
    <ContentWithSidebar
      content={<ArticlesList data={[featuredArticle]} />}
      sidebar={<ArticlesList mini data={normalArticles} />}
    />
  );
};

Articles.propTypes = {
  data: PT.arrayOf(PT.object).isRequired,
};

export default Articles;
