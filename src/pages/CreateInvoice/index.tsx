import React, { PropsWithChildren } from 'react';
import BackButton from '../../components/BackButton';
import CreateInvoiceForm from '../../components/CreateInvoiceForm';
import PageWrapper from '../../components/Layout/PageWrapper';

const CreateInvoice: React.FC<PropsWithChildren> = () => {
  return (
    <PageWrapper>
      <BackButton />
      <CreateInvoiceForm />
    </PageWrapper>
  );
};

export default CreateInvoice;
