import React, { PropsWithChildren } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import InvoiceStatusBar from '../../components/InvoiceStatusBar';
import InvoiceCard from '../../components/InvoiceCard';
import PageWrapper from '../../components/Layout/PageWrapper';
import DownloadInvoice from '../../components/DownloadInvoice';
import { useAppSelector } from '../../store';
import { useGetInvoiceQuery } from '../../store/api';
import Loading from '../../components/Loading';
import SEO from '../../components/SEO';

const Invoice: React.FC<PropsWithChildren> = () => {
  const id = useParams<{ id: string }>().id as string;
  const token = useAppSelector((state) => state.auth.accessToken) as string;
  const { data, isLoading } = useGetInvoiceQuery({
    id,
    token,
  });

  return (
    <>
      <SEO title={`Invoice ${data?.invoiceNumber}`} />
      <PageWrapper>
        <BackButton />
        {isLoading && (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Loading />
          </div>
        )}
        {data && (
          <>
            <InvoiceStatusBar invoice={data} />
            <InvoiceCard invoice={data} />
            <DownloadInvoice invoice={data} />
          </>
        )}
      </PageWrapper>
    </>
  );
};

export default Invoice;
