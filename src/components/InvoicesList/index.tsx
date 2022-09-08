import React from 'react';
import { useAppSelector } from '../../store';
import { Invoice } from '../../typings/Invoice';
import InvoiceItem from './InvoiceItem';
import StyledInvoicesList from './styles';

interface Props {
  invoices: Invoice[];
}

const InvoicesList: React.FC<Props> = ({ invoices }) => {
  const { filterBy } = useAppSelector((state) => state.filterBy);
  return (
    <StyledInvoicesList>
      <h2>{filterBy} Invoices</h2>
      {invoices.map((i) => (
        <InvoiceItem invoice={i} key={i.id} />
      ))}
    </StyledInvoicesList>
  );
};

export default InvoicesList;
