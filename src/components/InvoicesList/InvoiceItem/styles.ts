import styled from 'styled-components';

const StyledInvoiceItem = styled.li`
  a {
    text-decoration: none;
    color: inherit;
    /* display: grid; */
    /* grid-template-columns: 56px 100px 1fr min-content min-content min-content; */
    height: 72px;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 0 32px;
    border-radius: 8px;
    border: 2px solid var(--color-bg-secondary);
    background-color: var(--color-bg-secondary);
    outline: none;
    transition: all ease-in-out 150ms;
    &:hover,
    &:focus {
      border: 2px solid var(--color-brand);
    }
    .id {
      span {
        color: var(--color-brand);
        font-size: 0.8rem;
        display: inline-block;
        margin-right: 1px;
      }
      font-weight: 600;
    }
    .name {
      flex-grow: 1;
      padding: 0 10px;
    }
    .date {
      color: var(--color-text-secondary);
      /* color: #afb2c4; */
    }
    .total {
      font-size: 1.25rem;
      font-weight: bold;
      text-align: right;
      margin-right: 15px;
    }

    .right-icon {
      color: var(--color-brand);
    }
  }
`;

export default StyledInvoiceItem;
