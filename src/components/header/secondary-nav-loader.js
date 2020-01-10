import React, { Suspense, lazy } from 'react';

const SecondaryNav = lazy(() => import('./secondary-nav'));

const SecondaryNavLoader = ({ visible }) => {
  const isSSR = typeof window === 'undefined';
  return (
    <>
      {!isSSR && (
        <Suspense fallback={null}>
          <SecondaryNav visible={visible} />
        </Suspense>
      )}
    </>
  );
};

export default SecondaryNavLoader;
