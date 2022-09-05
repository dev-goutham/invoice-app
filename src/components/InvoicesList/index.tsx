import React from 'react';
import { Invoice } from '../../typings/Invoice';
import InvoiceItem from './InvoiceItem';
import StyledInvoicesList from './styles';

interface Props {
  invoices: Invoice[];
}

const InvoicesList: React.FC<Props> = ({ invoices }) => {
  return (
    <StyledInvoicesList>
      {invoices.map((i) => (
        <InvoiceItem invoice={i} key={i.id} />
      ))}
    </StyledInvoicesList>
  );
};

export default InvoicesList;
