import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledEditInvoiceModal = styled(Modal)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
  .card {
    margin-top: 20px;
    background-color: var(--color-bg-primary);
    padding: 40px;
    border-radius: 8px;
    overflow-y: scroll;

    .close-button {
      background-color: transparent;
      border: none;
      color: inherit;
      svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`;
