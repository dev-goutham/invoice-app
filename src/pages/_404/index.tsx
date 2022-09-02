import React, { PropsWithChildren } from 'react';
import BackButton from '../../components/BackButton';
import PageWrapper from '../../components/Layout/PageWrapper';

const NotFound: React.FC<PropsWithChildren> = () => {
  return (
    <PageWrapper>
      <BackButton />
      <h1>Page Not Found</h1>
    </PageWrapper>
  );
};

export default NotFound;
