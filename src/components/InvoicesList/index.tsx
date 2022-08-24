import React, { PropsWithChildren } from 'react';
import { invoices } from '../../dummy-data';
import InvoiceItem from './InvoiceItem';
import StyledInvoicesList from './styles';

const InvoicesList: React.FC<PropsWithChildren> = () => {
  return (
    <StyledInvoicesList>
      {invoices.map((i) => (
        <InvoiceItem invoice={i} key={i.id} />
      ))}
    </StyledInvoicesList>
  );
};

export default InvoicesList;
