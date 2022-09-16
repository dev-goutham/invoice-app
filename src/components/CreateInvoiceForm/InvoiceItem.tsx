import React, { useEffect, useState } from 'react';
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
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
  watch: UseFormWatch<Invoice>;
}> = ({ index, register, remove, taxApplicable, watch }) => {
  const [totalAfterTaxValue, setTotalAfterTaxValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const itemsWatch = watch('items');

  useEffect(() => {
    let totalAfterTax =
      itemsWatch[index]['price'] * itemsWatch[index]['quantity'];
    if (taxApplicable) {
      totalAfterTax =
        totalAfterTax + (totalAfterTax * itemsWatch[index]['taxRate']!) / 100;
    }
    setTotalAfterTaxValue(totalAfterTax);
  }, [
    itemsWatch[index]['price'],
    itemsWatch[index]['quantity'],
    itemsWatch[index]['taxRate'],
    taxApplicable,
  ]);
  useEffect(() => {
    const totalValue =
      itemsWatch[index]['price'] * itemsWatch[index]['quantity'];

    setTotalValue(totalValue);
  }, [
    itemsWatch[index]['price'],
    itemsWatch[index]['quantity'],
    itemsWatch[index]['taxRate'],
  ]);

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
      <Input
        id='total'
        labelText='Total'
        register={register(`items.${index}.total`)}
        value={totalValue}
        readOnly
      />
      {taxApplicable && (
        <>
          <Input
            id='tax-rate'
            labelText='GST(%)'
            register={register(`items.${index}.taxRate`)}
          />
          <Input
            id='total-after-tax'
            labelText='Total w/tax'
            register={register(`items.${index}.totalAfterTax`)}
            value={totalAfterTaxValue}
            readOnly
          />
        </>
      )}
      <button onClick={() => remove(index)}>
        <MdDelete />
      </button>
    </StyledInvoiceItem>
  );
};

export default InvoiceItem;
