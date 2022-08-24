import React from 'react';
import { Invoice } from '../../typings/Invoice';
import StatusBadge from '../StatusBadge';
import StyledInvoiceStatusBar from './styles';

interface Props {
  status: Invoice['status'];
}

const InvoiceStatusBar: React.FC<Props> = ({ status }) => {
  return (
    <StyledInvoiceStatusBar>
      <div className='section'>
        <h3>Status</h3>
        <StatusBadge status={status} />
      </div>
      <div className='section'>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
      </div>
    </StyledInvoiceStatusBar>
  );
};

export default InvoiceStatusBar;
