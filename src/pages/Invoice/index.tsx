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

const Invoice: React.FC<PropsWithChildren> = () => {
  const params = useParams<{ id: string }>();
  const token = useAppSelector((state) => state.auth.accessToken);
  const { data, isLoading } = useGetInvoiceQuery({
    id: params.id!,
    token: token!,
  });

  return (
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
          <InvoiceStatusBar invoice={data.data} />
          <InvoiceCard invoice={data.data} />
          <DownloadInvoice invoice={data.data} />
        </>
      )}
    </PageWrapper>
  );
};

export default Invoice;
