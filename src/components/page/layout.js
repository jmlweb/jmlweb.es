/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Wrapper } from '../wrapper';
import Header from './header';
import style from './layout.module.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={style.wrapper}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Wrapper>
          {children}
        </Wrapper>
      </main>
      <footer className={style.footer}>
        <Wrapper>
        {new Date().getFullYear()}, José Manuel Lucas
        </Wrapper>
        </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
