import React from 'react';
import { Invoice } from '../../typings/Invoice';
import formatCurrency from '../../utils/formatCurrency';
import { StyledInvoiceTable } from './styles';

interface Props {
  total: Invoice['total'];
  taxApplicable: boolean;
  invoiceItems: Invoice['items'];
}

const InvoiceTable: React.FC<Props> = ({
  invoiceItems,
  total,
  taxApplicable,
}) => {
  return (
    <StyledInvoiceTable>
      <thead>
        <tr>
          <td>Description</td>
          <td className='center-align'>Qty./Hrs.</td>
          <td className='right-align'>Price</td>
          {taxApplicable && <td>GST</td>}
          <td className='right-align'>Total</td>
        </tr>
      </thead>
      <tbody>
        {invoiceItems.map((item, idx) => (
          <tr key={idx}>
            <td>{item.name}</td>
            <td className='center-align'>{item.quantity}</td>
            <td className='right-align'>{formatCurrency(item.price)}</td>
            {taxApplicable && <td>{item.taxRate + '%'}</td>}
            <td className='right-align'>{formatCurrency(item.total)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={taxApplicable ? 4 : 3}>Total</td>
          <td className='right-align'>{formatCurrency(total)}</td>
        </tr>
      </tfoot>
    </StyledInvoiceTable>
  );
};

export default InvoiceTable;
