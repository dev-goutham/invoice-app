import React, { useRef } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import CreateInvoiceForm from '../CreateInvoiceForm';
import { StyledEditInvoiceModal } from './styles';
import Modal from 'react-modal';
import useClickAwayListener from '../../hooks/useClickAwayListener';
import { Invoice } from '../../typings/Invoice';
import useHandleSubmit from '../CreateInvoiceForm/hooks/useHandleSubmit';

interface Props {
  isOpen: boolean;
  close: () => void;
  invoice: Invoice;
}

Modal.setAppElement('#root');

const EditInvoiceModal: React.FC<Props> = ({ isOpen, close, invoice }) => {
  const ref = useRef<null | HTMLDivElement>(null);
  useClickAwayListener(ref, close);
  const handleSubmit = useHandleSubmit('update', () => {
    close();
  });

  if (!isOpen) return null;

  return (
    <StyledEditInvoiceModal isOpen={isOpen}>
      <div ref={ref} className='card'>
        <button className='close-button' onClick={close}>
          <AiOutlineCloseCircle />
        </button>
        <CreateInvoiceForm
          initialValues={{
            ...invoice,
            invoiceDate: new Date(invoice.invoiceDate),
            poDate: invoice.poDate && new Date(invoice.poDate),
          }}
          mode='update'
          onSubmit={handleSubmit}
        />
      </div>
    </StyledEditInvoiceModal>
  );
};

export default EditInvoiceModal;
