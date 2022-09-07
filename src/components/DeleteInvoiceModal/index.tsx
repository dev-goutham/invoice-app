import React, { useCallback, useRef } from 'react';
import StyledDeleteInvoiceModal from './styles';
import Modal from 'react-modal';
import useClickAwayListener from '../../hooks/useClickAwayListener';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDeleteInvoiceMutation } from '../../store/api';
import { useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

interface Props {
  isOpen: boolean;
  close: () => void;
  invoiceId: string;
}

const DeleteInvoiceModal: React.FC<Props> = ({ isOpen, close, invoiceId }) => {
  const ref = useRef(null);

  useClickAwayListener(ref, close);

  const token = useAppSelector((state) => state.auth.accessToken) as string;
  const navigate = useNavigate();

  const [deleteInvoice] = useDeleteInvoiceMutation();

  const clickHandler = useCallback(async () => {
    await deleteInvoice({
      id: invoiceId,
      token,
    });
    navigate('/');
  }, [invoiceId, token]);

  return (
    <StyledDeleteInvoiceModal isOpen={isOpen}>
      <div ref={ref} className='card'>
        <button className='close-button' onClick={close}>
          <AiOutlineCloseCircle />
        </button>

        <div>
          <h2>Are you Sure you want to delete the invoice?</h2>
          <button className='delete-button' onClick={clickHandler}>
            Delete
          </button>
        </div>
      </div>
    </StyledDeleteInvoiceModal>
  );
};

export default DeleteInvoiceModal;
