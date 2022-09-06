import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

export const StyledCreateInvoiceForm = styled.form`
  margin: 30px auto 0 auto;
  ${breakpoint('mobile', 'tablet')`
    max-width: 450px;
    width: 450px;
    `}

  max-width: 600px;
  width: 600px;

  legend {
    color: var(--color-brand);
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 1.15rem;
  }

  .stack {
    display: flex;
    max-width: 602px;
    gap: 20px;
  }

  .info {
    display: felx;
    align-items: center;
    justify-content: space-between;
    .checkbox {
      /* margin-bottom: 20px; */
      display: flex;
      gap: 7.5px;
      align-items: baseline;
      color: inherit;
      label {
        color: var(--color-text-secondary);
        font-size: 0.9rem;
        font-weight: bold;
      }
      input[type='checkbox'] {
        display: inline-block;
        height: 18px;
        width: 18px;
        accent-color: var(--color-brand);
      }
    }

    .select {
      display: flex;
      gap: 7.5px;
      align-items: baseline;
      color: inherit;
      label {
        color: var(--color-text-secondary);
        font-size: 0.9rem;
        font-weight: bold;
      }
      select {
        display: inline-block;
        /* height: 18px;
        width: 18px; */
        padding: 5px;
        background-color: var(--color-brand);
        color: inherit;
        border-radius: 8px;
        accent-color: var(--color-brand);
      }
    }
  }
`;

export const StyledAddItemButton = styled.button`
  width: 100%;
  padding: 15px 0;
  margin-bottom: 20px;
  border-radius: 160px;
  border: 1px solid var(--color-bg-secondary);
  background-color: var(--color-bg-secondary);
  outline: none;
  color: var(--color-text-secondary);
  font-weight: bold;
  transition: all ease-in 150ms;
  cursor: pointer;
  span {
    &:first-of-type {
      margin-right: 7.5px;
    }
  }
  &:hover,
  &:focus {
    border-color: var(--color-bg-tertiary);
    background-color: var(--color-bg-tertiary);
  }
`;

export const StyledInput = styled.div<{ error: boolean }>`
  & > * {
    display: block;
    width: 100%;
    max-width: 500px;
  }
  label {
    color: ${({ error }) =>
      error ? 'rgb(236, 87, 87)' : 'var(--color-text-secondary)'};
    margin-bottom: 5px;
    font-size: 0.85rem;
  }
  input {
    display: block;
    max-width: 600px;
    width: calc(100% - 42px);
    margin-bottom: 20px;
    padding: 16px 20px;
    color: inherit;
    background-color: var(--color-bg-secondary);
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ error }) =>
      error ? `rgb(236, 87, 87)` : `var(--color-bg-secondary)`};
    outline: none;
    &:focus,
    &:hover {
      border-color: ${({ error }) =>
        error ? `rgb(236, 87, 87)` : `var(--color-brand)`};
    }
    &::placeholder {
      color: var(--color-text-secondary);
      opacity: 0.5;
    }
  }
`;

export const StyledDatePicker = styled.div`
  width: 100%;
  margin-bottom: 20px;
  & > * {
    display: block;
  }
  label {
    color: var(--color-text-secondary);
    margin-bottom: 5px;
  }
  .btn {
    width: 100%;
    padding: 16px 20px;
    border-radius: 8px;
    background-color: var(--color-bg-secondary);
    border: var(--color-bg-secondary);
    display: flex;
    justify-content: space-between;
    span {
      display: inline-block;
      letter-spacing: 1.5px;
      color: var(--color-text-primary);
      svg {
        color: var(--color-brand);
      }
    }
  }
`;

export const StyledInvoiceItem = styled.div`
  margin: 10px 0;
  display: flex;
  div {
    width: 140px;
    &:first-of-type {
      width: 100%;
      max-width: 220px;
    }
  }
  /* display: grid;
  grid-template-columns: 1fr 66px 100px 60px 16px; */
  gap: 10px;
  button {
    padding: 0 10px;
    background: none;
    color: rgb(236, 87, 87);
    border: none;
    outline: none;
    font-size: 1.15rem;
    cursor: pointer;
  }
`;

export const StyledActionButtons = styled.div`
  display: flex;
  justify-content: space-between;

  .right {
    display: flex;
    gap: 20px;
  }
  button {
    display: block;
    padding: 16px 24px;
    border-radius: 160px;
    color: inherit;
    border-color: transparent;
    cursor: pointer;
    transition: opacity ease-in-out 150ms;
    font-weight: bold;
    &:hover {
      opacity: 0.8;
    }
  }

  .discard {
    background-color: rgb(236, 87, 87);
  }

  .draft {
    background-color: var(--color-bg-secondary);
  }

  .save {
    background-color: var(--color-brand);
  }
`;
