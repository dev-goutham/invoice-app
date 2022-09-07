import { Invoice } from '../../../typings/Invoice';
import {
  useCreateInvoiceMutation,
  useUpdateInvoiceMutation,
} from '../../../store/api';
import { useAppSelector } from '../../../store';
import { useParams } from 'react-router-dom';

const useHandleSubmit = (
  mode: 'create' | 'update' = 'create',
  onComplete: () => unknown,
) => {
  const [createInvoice] = useCreateInvoiceMutation();
  const [updateInvoice] = useUpdateInvoiceMutation();
  const token = useAppSelector((state) => state.auth.accessToken);
  const { id } = useParams<{ id: string }>();

  const onSubmit = async (invoice: Invoice) => {
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
