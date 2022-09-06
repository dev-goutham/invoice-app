import {
  FieldArrayWithId,
  useFieldArray,
  useForm,
  UseFormReturn,
  DefaultValues,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Invoice, InvoiceItem } from '../../../typings/Invoice';
import schema from './../schema';
import { useCallback, useEffect, useState } from 'react';

type ReturnObj = UseFormReturn<Invoice, unknown> & {
  addItem: () => void;
  removeItem: (index: number) => void;
  fields: FieldArrayWithId<Invoice, 'items', 'id'>[];
  isTaxApplicable: boolean;
};

const defaultValues: DefaultValues<Invoice> = {
  createdAt: new Date(),
  paymentDue: new Date(),
  taxApplicable: false,
};

const useCreateInvoiceForm = (initialValues = defaultValues): ReturnObj => {
  const methods = useForm<Invoice>({
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur',
    mode: 'onTouched',
    defaultValues: initialValues,
  });

  const [isTaxApplicable, setIsTaxApplicable] = useState(false);

  const taxApplicable = methods.watch('taxApplicable');

  useEffect(() => {
    setIsTaxApplicable(taxApplicable);
  }, [taxApplicable]);

  const { append, fields, remove } = useFieldArray({
    control: methods.control,
    name: 'items',
  });

  const addItem = useCallback(() => {
    const initValues: InvoiceItem = {
      name: '',
      price: 0,
      quantity: 0,
      total: 0,
      taxRate: 0,
    };
    append(initValues);
  }, [append]);

  const removeItem = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  return { ...methods, addItem, removeItem, fields, isTaxApplicable };
};

export default useCreateInvoiceForm;
