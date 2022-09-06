import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';
import { useAppSelector } from '../../store';
import { useDeleteInvoiceMutation } from '../../store/api';
import { Invoice } from '../../typings/Invoice';
import EditInvoiceModal from '../EditInvoiceModal';
import StatusBadge from '../StatusBadge';
import StyledInvoiceStatusBar from './styles';

interface Props {
  invoice: Invoice;
}

const InvoiceStatusBar: React.FC<Props> = ({ invoice }) => {
  const { state: isModalOpen, open, close } = useToggle();
  const token = useAppSelector((state) => state.auth.accessToken);
  const params = useParams<{ id: string }>();
  const [deleteInvoice] = useDeleteInvoiceMutation();
  const navigate = useNavigate();

  const del = async () => {
    await deleteInvoice({
      id: params.id!,
      token: token!,
    });
    navigate('/');
  };

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
        <button onClick={del} className='delete'>
          Delete
        </button>
      </div>
    </StyledInvoiceStatusBar>
  );
};

export default InvoiceStatusBar;
