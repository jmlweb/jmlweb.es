import React from 'react';
import PT from 'prop-types';

import generateSlug from '../../utils/generateSlug';
import Wrapper from './components/Wrapper';
import MiniWrapper from './components/MiniWrapper';
import Header from './components/Header';
import Body from './components/Body';
import ReadMore from './components/ReadMore';
import EntryImage from './components/EntryImage';

const Article = ({ data, mini, detail }) => {
  const url = `/articulo/${generateSlug(data.title)}`;
  const WrapperComponent = mini ? MiniWrapper : Wrapper;
  const showDescription = detail && data.description;
  return (
    <WrapperComponent>
      <Header mini={mini} detail={detail} url={url}>
        {data.title}
      </Header>
      {!mini && data.entryImage && <EntryImage photo={data.entryImage} url={url} />}
      <Body mini={mini}>
        <div
          dangerouslySetInnerHTML={{
            __html:
              data.entry &&
              (mini
                ? `<p>${data.entry.childMarkdownRemark.excerpt}</p>`
                : data.entry.childMarkdownRemark.html),
          }}
        />
        <div
          id="descripcion"
          dangerouslySetInnerHTML={{
            __html: showDescription ? data.description.childMarkdownRemark.html : '',
          }}
        />
      </Body>
      {!mini && !detail && <ReadMore url={url} />}
    </WrapperComponent>
  );
};

Article.propTypes = {
  data: PT.shape({
    title: PT.string,
    entry: PT.shape({
      childMarkdownRemark: PT.object,
    }),
  }).isRequired,
  mini: PT.bool,
  detail: PT.bool,
};

Article.defaultProps = {
  mini: false,
  detail: false,
};

export default Article;
