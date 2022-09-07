import React from 'react';
import { useParams } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';
import DeleteInvoiceModal from '../DeleteInvoiceModal';

const Delete: React.FC = () => {
  const { state: isOpen, close, open } = useToggle();
  const id = useParams<{ id: string }>().id as string;

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={open} className='delete'>
        Delete
      </button>
      <DeleteInvoiceModal isOpen={isOpen} close={close} invoiceId={id} />
    </div>
  );
};

export default Delete;
