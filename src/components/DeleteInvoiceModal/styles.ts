import styled from 'styled-components';
import Modal from 'react-modal';

const StyledDeleteInvoiceModal = styled(Modal)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
  .card {
    background-color: var(--color-bg-primary);
    padding: 40px;
    border-radius: 8px;
    height: min-content;
    width: 250px;
    h2 {
      font-size: 1.25rem;
      font-weight: bold;
      margin: 20px 0;
    }
    .delete-button {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      color: white;
      background-color: rgb(236, 87, 87);
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
    .close-button {
      background-color: transparent;
      border: none;
      color: inherit;
      padding: 0;
      svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`;

export default StyledDeleteInvoiceModal;
