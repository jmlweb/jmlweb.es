import React from 'react';

import Header from '../../header';
import Seo from '../../seo';
import Footer from '../../footer';
import styles from './info.module.css';

const Info = ({ posts, currentPage, numPages }) => (
  <div className={styles.info}>
    <Seo title="About me" />
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>About me</h1>
      <p>Bla bla bla</p>
    </main>
    <Footer />
  </div>
);

export default Info;
