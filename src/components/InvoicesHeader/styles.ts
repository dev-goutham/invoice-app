import styled from 'styled-components';

export const StyledInvoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .heading {
    letter-spacing: 1px;
    h2 {
      font-size: 2.25rem;
      font-weight: bold;
      line-height: 1.2;
    }
    p {
      font-weight: 200;
      font-size: 0.85rem;
    }
  }

  .right {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .filter-by {
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    gap: 5px;
    font-weight: 600;
    border: none;
    outline: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    * {
      line-height: 0;
    }
    svg {
      font-size: 1.5rem;
      color: var(--color-brand);
    }
  }

  .add-btn {
    display: flex;
    text-decoration: none;
    gap: 10px;
    padding: 10px 15px;
    background-color: var(--color-brand);
    border-radius: 25px;
    align-items: center;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    opacity: 1;
    &:hover,
    &:focus {
      opacity: 0.95;
    }
    svg {
      font-size: 1.75rem;
    }
    span {
      line-height: 0.5;
    }
  }
`;

export const StyledFilterBy = styled.div`
  position: relative;
  .options {
    background-color: var(--color-bg-tertiary);
    padding: 20px 26px;
    position: absolute;
    top: 35px;
    left: -30px;
    width: 130px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 25%) 0px 10px 20px;

    .radio-btn {
      display: flex;
      align-items: center;
      label {
        color: var(--color-text-secondary);
        font-size: 16px;
      }
      input[type='radio'] {
        width: 16px;
        height: 16px;
        margin-top: -2.8px;
        margin-right: 12px;
        accent-color: var(--color-brand);
      }
      margin-bottom: 20px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;
