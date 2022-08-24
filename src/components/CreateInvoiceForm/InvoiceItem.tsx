import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { MdDelete } from 'react-icons/md';
import { Invoice } from '../../typings/Invoice';
import Input from './Input';
import { StyledInvoiceItem } from './styles';

const InvoiceItem: React.FC<{
  key: string;
  index: number;
  register: UseFormRegister<Invoice>;
  remove: (index: number) => void;
  taxApplicable?: boolean;
}> = ({ index, register, remove, taxApplicable }) => {
  return (
    <StyledInvoiceItem>
      <Input
        id='item-name'
        labelText='Item Name'
        register={register(`items.${index}.name`)}
      />
      <Input
        id='quantity'
        labelText='Qty./Hrs.'
        register={register(`items.${index}.quantity`)}
      />
      <Input
        id='price'
        labelText='Price'
        register={register(`items.${index}.price`)}
      />
      {taxApplicable && (
        <Input
          id='tax-rate'
          labelText='GST(%)'
          register={register(`items.${index}.taxRate`)}
        />
      )}
      <Input
        id='total'
        labelText='Total'
        register={register(`items.${index}.total`)}
      />
      <button onClick={() => remove(index)}>
        <MdDelete />
      </button>
    </StyledInvoiceItem>
  );
};

export default InvoiceItem;
