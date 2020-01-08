import React, { Suspense, lazy } from 'react';

import Header from '../header';
import Seo from '../seo';
import Footer from '../footer';
import styles from './standard-page.module.css';
const MainImg = lazy(() => import('../main-img'));

const StandardPage = ({ title, htmlTitle, omitTitle = false, description, children }) => (
  <div className={styles.wrapper}>
    <Seo title={title} description={description} />
    <Header />
    <main className={styles.main}>
      {!omitTitle && <h1 className={styles.title}>{htmlTitle || title}</h1>}
      {children}
    </main>
    <Footer />
    <Suspense fallback={null}>
      <MainImg />
    </Suspense>
  </div>
);

export default StandardPage;
