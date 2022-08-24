import React, { PropsWithChildren } from 'react';
import InvoicesHeader from '../../components/InvoicesHeader';
import InvoicesList from '../../components/InvoicesList';
import PageWrapper from '../../components/Layout/PageWrapper';

const Home: React.FC<PropsWithChildren> = () => {
  return (
    <PageWrapper>
      <InvoicesHeader />
      <InvoicesList />
    </PageWrapper>
  );
};

export default Home;
