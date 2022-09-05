import {
  FieldArrayWithId,
  useFieldArray,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Invoice, InvoiceItem } from '../../typings/Invoice';
import schema from './schema';
import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../store';
import { useCreateInvoiceMutation } from '../../store/api';
import { useNavigate } from 'react-router-dom';

type ReturnObj = UseFormReturn<Invoice, unknown> & {
  addItem: () => void;
  removeItem: (index: number) => void;
  fields: FieldArrayWithId<Invoice, 'items', 'id'>[];
  onSubmit: (value: Invoice) => void;
  isTaxApplicable: boolean;
};

const useCreateInvoiceForm = (): ReturnObj => {
  const token = useAppSelector((state) => state.auth.accessToken);
  const [createInvoice, { data }] = useCreateInvoiceMutation();
  const methods = useForm<Invoice>({
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur',
    mode: 'onTouched',
    defaultValues: {
      createdAt: new Date(),
      paymentDue: new Date(),
      taxApplicable: false,
    },
  });

  const navigate = useNavigate();

  const [isTaxApplicable, setIsTaxApplicable] = useState(false);

  const taxApplicable = methods.watch('taxApplicable');

  useEffect(() => {
    console.log(data);
  }, [data]);

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

  const onSubmit = (invoice: Invoice) => {
    // const items = invoice.items.map((item) => ({
    //   ...item,
    //   total:
    //     item.price * item.quantity * (item.taxRate ? item.taxRate / 100 : 1),
    // }));

    const invoiceItems: Invoice['items'] = invoice.items.map((item) => {
      let total = item.price * item.quantity;
      if (item.taxRate) {
        total = total - (total * item.taxRate) / 100;
      }
      return {
        ...item,
        total,
      };
    });

    invoice.items = invoiceItems;
    let total = 0;
    invoice.items.forEach((item) => {
      total += item.total;
    });
    createInvoice({
      invoice: {
        ...invoice,
        status: 'due',
        total,
      },
      token: token!,
    });
    navigate('/');
  };

  return { ...methods, addItem, removeItem, fields, onSubmit, isTaxApplicable };
};

export default useCreateInvoiceForm;
