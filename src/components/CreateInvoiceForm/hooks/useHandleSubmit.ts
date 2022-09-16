import { Invoice } from '../../../typings/Invoice';
import {
  useCreateInvoiceMutation,
  useUpdateInvoiceMutation,
} from '../../../store/api';
import { useAppSelector } from '../../../store';
import { useParams } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';

const useHandleSubmit = (
  mode: 'create' | 'update' = 'create',
  onComplete: () => unknown,
): SubmitHandler<Invoice> => {
  const [createInvoice] = useCreateInvoiceMutation();
  const [updateInvoice] = useUpdateInvoiceMutation();
  const token = useAppSelector((state) => state.auth.accessToken);
  const { id } = useParams<{ id: string }>();

  const onSubmit = async (invoice: Invoice) => {
    const invoiceItems: Invoice['items'] = invoice.items.map((item) => {
      let totalAfterTax = item.price * item.quantity;
      if (item.taxRate) {
        totalAfterTax = totalAfterTax + (totalAfterTax * item.taxRate) / 100;
      }
      return {
        ...item,
        totalAfterTax,
        total: item.price * item.quantity,
      };
    });

    invoice.items = invoiceItems;
    let total = 0;
    invoice.items.forEach((item) => {
      total += item.totalAfterTax;
    });
    if (mode === 'create') {
      await createInvoice({
        invoice: {
          ...invoice,
          status: 'due',
          total,
        },
        token: token!,
      });
      onComplete();
    } else if (mode === 'update') {
      await updateInvoice({
        invoice,
        token: token!,
        id: id!,
      });
      onComplete();
    }
  };

  return onSubmit;
};

export default useHandleSubmit;
