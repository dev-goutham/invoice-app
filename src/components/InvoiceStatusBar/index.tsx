import React from 'react';
import useToggle from '../../hooks/useToggle';
import { Invoice } from '../../typings/Invoice';
import EditInvoiceModal from '../EditInvoiceModal';
import StatusBadge from '../StatusBadge';
import StyledInvoiceStatusBar from './styles';

interface Props {
  invoice: Invoice;
}

const InvoiceStatusBar: React.FC<Props> = ({ invoice }) => {
  const { state: isModalOpen, open, close } = useToggle();

  return (
    <StyledInvoiceStatusBar>
      <div className='section'>
        <h3>Status</h3>
        <StatusBadge status={invoice.status} />
      </div>
      <div className='section'>
        <div style={{ position: 'relative' }}>
          <button onClick={open} className='edit'>
            Edit
          </button>
          <EditInvoiceModal
            invoice={invoice}
            isOpen={isModalOpen}
            close={close}
          />
        </div>
        <button className='delete'>Delete</button>
      </div>
    </StyledInvoiceStatusBar>
  );
};

export default InvoiceStatusBar;
