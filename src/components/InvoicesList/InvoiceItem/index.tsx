import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import { Invoice } from '../../../typings/Invoice';
import StyledInvoiceItems from './styles';
import StatusBadge from '../../StatusBadge';
import formatCurrency from '../../../utils/formatCurrency';

interface Props {
  invoice: Invoice;
}

const InvoiceItem: React.FC<Props> = ({
  invoice: {
    id,
    invoiceNumber,
    createdAt,
    status,
    total,
    clientDetails: { name },
  },
}) => {
  return (
    <StyledInvoiceItems>
      <Link to={`/invoice/${id}`}>
        <div className='id'>
          <span>#</span>
          {invoiceNumber}
        </div>
        <div className='date'>
          {new Date(createdAt).toDateString().slice(3)}
        </div>
        <div className='name'>{name}</div>
        <div className='total'>{formatCurrency(total)}</div>
        <StatusBadge status={status} />
        <div className='right-icon'>
          <BiChevronRight />
        </div>
      </Link>
    </StyledInvoiceItems>
  );
};

export default InvoiceItem;
