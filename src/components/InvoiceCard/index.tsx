import React from 'react';
import { Invoice } from '../../typings/Invoice';
import InvoiceDetails from './InvoiceDetails';
import InvoiceHeader from './InvoiceHeader';
import InvoiceTable from './InvoiceTable';
import { StyledInvoiceCard } from './styles';

interface Props {
  invoice: Invoice;
}

const InvoiceCard: React.FC<Props> = ({ invoice }) => {
  const { invoiceNumber, description, senderDetails } = invoice;
  return (
    <StyledInvoiceCard>
      <InvoiceHeader
        invoiceNumber={invoiceNumber}
        description={description}
        senderDetails={senderDetails}
      />
      <InvoiceDetails invoice={invoice} />
      <InvoiceTable
        taxApplicable={invoice.taxApplicable}
        total={invoice.total}
        invoiceItems={invoice.items}
      />
    </StyledInvoiceCard>
  );
};

export default InvoiceCard;
