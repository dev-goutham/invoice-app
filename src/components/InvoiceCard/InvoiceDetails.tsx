import React from 'react';
import { Invoice } from '../../typings/Invoice';
import { StyledInvoiceDetails } from './styles';

interface Props {
  invoice: Invoice;
}

const InvoiceDetails: React.FC<Props> = ({
  invoice: {
    invoiceDate,
    clientDetails: {
      name,
      street,
      city,
      country,
      postCode,
      taxRegistrationNumber,
      email,
    },
  },
}) => {
  return (
    <StyledInvoiceDetails>
      <div className='dates'>
        <div>
          <p>Invoice Date</p>
          <p className='date'>
            {new Date(invoiceDate).toDateString().slice(4)}
          </p>
        </div>
      </div>
      <div className='client-details'>
        <h4>Bill To</h4>
        <p className='name'>{name}</p>
        <p>{street}</p>
        <p>{city}</p>
        <p>{postCode}</p>
        <p>{country}</p>
        {taxRegistrationNumber && <p>{taxRegistrationNumber}</p>}
      </div>
      <div className='client-email'>
        <h4>Send to</h4>
        <p>{email}</p>
      </div>
    </StyledInvoiceDetails>
  );
};

export default InvoiceDetails;
