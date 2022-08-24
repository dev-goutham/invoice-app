import styled from 'styled-components';

const StyledInvoiceStatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: var(--color-bg-secondary);
  border-radius: 8px;
  .section {
    display: flex;
    gap: 15px;
    align-items: center;

    h3 {
      color: var(--color-text-secondary);
    }
  }

  button {
    padding: 16px 24px;
    border-radius: 160px;
    font-weight: bold;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    transition: opacity ease-in 150ms;
    &:hover {
      opacity: 0.85;
    }
  }

  .edit {
    background-color: rgb(37, 41, 69);
  }

  .delete {
    background-color: rgb(236, 87, 87);
  }
`;

export default StyledInvoiceStatusBar;
