import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { StyledInvoiceHeader } from './styles';
import FilterBy from './FilterBy';
import { Link } from 'react-router-dom';

const InvoicesHeader: React.FC<{
  numberOfInvoices: number;
}> = ({ numberOfInvoices }) => {
  return (
    <StyledInvoiceHeader>
      <div className='heading'>
        <h2>Invoices</h2>
        <p>There are {numberOfInvoices} invoices</p>
      </div>
      <div className='right'>
        <FilterBy />
        <Link to='/create-invoice' className='add-btn'>
          <span>
            <AiFillPlusCircle />
          </span>
          <span>New Invoice</span>
        </Link>
      </div>
    </StyledInvoiceHeader>
  );
};

export default InvoicesHeader;
