import React, { PropsWithChildren } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import InvoiceStatusBar from '../../components/InvoiceStatusBar';
import { invoices } from '../../dummy-data';
import InvoiceCard from '../../components/InvoiceCard';
import PageWrapper from '../../components/Layout/PageWrapper';

const Invoice: React.FC<PropsWithChildren> = () => {
  const params = useParams<{ id: string }>();
  const invoice = invoices.find((i) => i.id === params.id)!;
  return (
    <PageWrapper>
      <BackButton />
      <InvoiceStatusBar status={invoice.status} />
      <InvoiceCard invoice={invoice} />
    </PageWrapper>
  );
};

export default Invoice;
