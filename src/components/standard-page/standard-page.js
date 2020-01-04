import React from 'react';

import Header from '../header';
import Seo from '../seo';
import Footer from '../footer';
import styles from './standard-page.module.css';

const StandardPage = ({ title, htmlTitle, children }) => (
  <div className={styles.wrapper}>
    <Seo title={title} />
    <div className={styles.picWrapper} />
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>{htmlTitle || title}</h1>
      {children}
    </main>
    <Footer />
  </div>
);

export default StandardPage;
