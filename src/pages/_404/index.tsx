import React, { PropsWithChildren } from 'react';
import BackButton from '../../components/BackButton';
import PageWrapper from '../../components/Layout/PageWrapper';
import SEO from '../../components/SEO';

const NotFound: React.FC<PropsWithChildren> = () => {
  return (
    <>
      <SEO title='404' />
      <PageWrapper>
        <BackButton />
        <h1>Page Not Found</h1>
      </PageWrapper>
    </>
  );
};

export default NotFound;
