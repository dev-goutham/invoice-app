import React from 'react';
import useToggle from '../../hooks/useToggle';
import { Invoice } from '../../typings/Invoice';
import EditInvoiceModal from '../EditInvoiceModal';

const Edit: React.FC<{ invoice: Invoice }> = ({ invoice }) => {
  const { state: isModalOpen, open, close } = useToggle();

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={open} className='edit'>
        Edit
      </button>
      <EditInvoiceModal invoice={invoice} isOpen={isModalOpen} close={close} />
    </div>
  );
};

export default Edit;
