import React, { Suspense, lazy } from 'react';
import styles from './share-post-loader.module.css';

const SharePost = lazy(() => import('./share-post'));

const SharePostLoader = props => {
  const isSSR = typeof window === 'undefined';
  const fakePostContent = <div className={styles.fakeWrapper} />;
  return (
    <>
      {!isSSR ? (
        <Suspense fallback={fakePostContent}>
          <SharePost {...props} />
        </Suspense>
      ) : (
        fakePostContent
      )}
    </>
  );
};

export default SharePostLoader;
