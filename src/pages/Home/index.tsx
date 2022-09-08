import React, { PropsWithChildren, useEffect } from 'react';
import InvoicesHeader from '../../components/InvoicesHeader';
import InvoicesList from '../../components/InvoicesList';
import PageWrapper from '../../components/Layout/PageWrapper';
import Loading from '../../components/Loading';
import { useAppSelector } from '../../store';
import { useLazyGetInvoicesQuery } from '../../store/api';

const Home: React.FC<PropsWithChildren> = () => {
  const token = useAppSelector((state) => state.auth.accessToken);
  const [getInvoices, { data, isFetching }] = useLazyGetInvoicesQuery();
  const { filterBy } = useAppSelector((state) => state.filterBy);
  useEffect(() => {
    if (token) {
      getInvoices({ token, filterBy });
    }
  }, [token, filterBy]);

  if (!token || isFetching) {
    return (
      <PageWrapper>
        <InvoicesHeader />
        <div
          style={{
            width: '100%',
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loading />
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <InvoicesHeader />
      {data && <InvoicesList invoices={data} />}
    </PageWrapper>
  );
};

export default Home;
