import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import CreateInvoiceForm from '../../components/CreateInvoiceForm';
import useHandleSubmit from '../../components/CreateInvoiceForm/hooks/useHandleSubmit';
import PageWrapper from '../../components/Layout/PageWrapper';
import SEO from '../../components/SEO';

const CreateInvoice: React.FC<PropsWithChildren> = () => {
  const navigate = useNavigate();
  const handleSubmit = useHandleSubmit('create', () => {
    navigate('/');
  });

  return (
    <>
      <SEO title='Create Invoice' />
      <PageWrapper>
        <BackButton />
        <CreateInvoiceForm onSubmit={handleSubmit} />
      </PageWrapper>
    </>
  );
};

export default CreateInvoice;
