import React, { PropsWithChildren, useEffect, useState } from 'react';
import InvoicesHeader from '../../components/InvoicesHeader';
import InvoicesList from '../../components/InvoicesList';
import PageWrapper from '../../components/Layout/PageWrapper';
import Loading from '../../components/Loading';
import { useAppSelector } from '../../store';
import { useLazyGetInvoicesQuery } from '../../store/api';
import { Invoice } from '../../typings/Invoice';

const Home: React.FC<PropsWithChildren> = () => {
  const token = useAppSelector((state) => state.auth.accessToken);
  const [getInvoices, { data, isLoading }] = useLazyGetInvoicesQuery();
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    if (token) {
      getInvoices(token);
    }
  }, [token]);

  useEffect(() => {
    if (data) {
      const i = data.invoices.data.map((item: any) => ({
        id: item.ref['@ref'].id,
        ...item.data,
      })) as Invoice[];
      setInvoices(i);
    }
  }, [data]);

  if (!token || isLoading) {
    return (
      <PageWrapper>
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
      {data && (
        <InvoicesList invoices={invoices} />
        // <pre>{JSON.stringify(data.invoices.data[1].data, null, 2)}</pre>
      )}
    </PageWrapper>
  );
};

export default Home;
