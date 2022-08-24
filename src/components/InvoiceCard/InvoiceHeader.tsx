import React from 'react';
import { Invoice } from '../../typings/Invoice';
import { StyledInvoiceHeader } from './styles';

interface Props {
  invoiceNumber: number;
  description: string;
  senderDetails: Invoice['senderDetails'];
}

const InvoiceHeader: React.FC<Props> = ({
  description,
  invoiceNumber,
  senderDetails: { street, city, postCode, country, taxRegistrationNumber },
}) => {
  return (
    <StyledInvoiceHeader>
      <div className='desc'>
        <h2>
          <span>#</span>
          {invoiceNumber}
        </h2>
        <p>{description}</p>
      </div>
      <address className='address'>
        <div>{street}</div>
        <div>{city}</div>
        <div>{postCode}</div>
        <div>{country}</div>
        {taxRegistrationNumber && <div>{taxRegistrationNumber}</div>}
      </address>
    </StyledInvoiceHeader>
  );
};

export default InvoiceHeader;
