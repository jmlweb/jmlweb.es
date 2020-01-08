import React from 'react';

import Header from '../header';
import Seo from '../seo';
import Footer from '../footer';
import styles from './standard-page.module.css';
import MainImg from '../main-img';

const StandardPage = ({ title, htmlTitle, omitTitle = false, description, children }) => (
  <div className={styles.wrapper}>
    <Seo title={title} description={description} />
    <Header />
    <main className={styles.main}>
      {!omitTitle && <h1 className={styles.title}>{htmlTitle || title}</h1>}
      {children}
    </main>
    <Footer />
    <MainImg />
  </div>
);

export default StandardPage;
