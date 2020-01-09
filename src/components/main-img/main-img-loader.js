import React, { Suspense, lazy } from 'react';

const MainImg = lazy(() => import('./main-img'));

const MainImgLoader = () => {
  const isSSR = typeof window === 'undefined';
  return (
    <>
      {!isSSR && (
        <Suspense fallback={null}>
          <MainImg />
        </Suspense>
      )}
    </>
  );
};

export default MainImgLoader;
