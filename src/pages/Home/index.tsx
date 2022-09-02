import React, { PropsWithChildren } from 'react';
import InvoicesHeader from '../../components/InvoicesHeader';
import InvoicesList from '../../components/InvoicesList';
import PageWrapper from '../../components/Layout/PageWrapper';

const Home: React.FC<PropsWithChildren> = () => {
  React.useEffect(() => {
    fetch('http://localhost:9999/.netlify/functions/get-invoice')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <PageWrapper>
      <InvoicesHeader />
      <InvoicesList />
    </PageWrapper>
  );
};

export default Home;
