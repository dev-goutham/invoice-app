import React from 'react';
import { Invoice } from '../../typings/Invoice';
import StatusBadge from '../StatusBadge';
import Delete from './Delete';
import Edit from './Edit';
import StyledInvoiceStatusBar from './styles';

interface Props {
  invoice: Invoice;
}

const InvoiceStatusBar: React.FC<Props> = ({ invoice }) => {
  return (
    <StyledInvoiceStatusBar>
      <div className='section'>
        <h3>Status</h3>
        <StatusBadge status={invoice.status} />
      </div>
      <div className='section'>
        <Edit invoice={invoice} />
        <Delete />
      </div>
    </StyledInvoiceStatusBar>
  );
};

export default InvoiceStatusBar;
