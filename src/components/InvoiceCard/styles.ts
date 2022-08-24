import styled from 'styled-components';

export const StyledInvoiceCard = styled.div`
  background-color: var(--color-bg-secondary);
  border-radius: 8px;
  padding: 16px 24px;
  & > * {
    margin-bottom: 35px;
  }
`;

export const StyledInvoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.35;
  .desc {
    h2 {
      font-weight: bold;
      font-size: 1.25rem;
    }
    span {
      color: var(--color-brand);
    }
    p {
      color: var(--color-text-secondary);
    }
  }

  .address {
    color: var(--color-text-secondary);
    text-align: right;
  }
`;

export const StyledInvoiceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.35;

  .dates {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      color: var(--color-text-secondary);
    }
    .date {
      color: var(--color-text-primary);
      font-size: 1.15rem;
      font-weight: bold;
    }
  }

  .client-details {
    h4,
    p {
      color: var(--color-text-secondary);
    }
    .name {
      color: var(--color-text-primary);
      font-weight: bold;
      font-size: 1.15rem;
    }
  }

  .client-email {
    h4 {
      color: var(--color-text-secondary);
    }
    p {
      font-weight: bold;
      font-size: 1.15rem;
    }
  }
`;

export const StyledInvoiceTable = styled.table`
  width: 100%;
  background-color: var(--color-bg-tertiary);
  border-radius: 8px;
  .center-align {
    text-align: center;
  }
  .right-align {
    text-align: right;
  }
  thead {
    color: var(--color-text-secondary);
    tr td {
      padding: 32px;
    }
  }
  tbody tr td {
    &:last-child {
      font-weight: bold;
    }
    padding: 0 32px 32px 32px;
  }
  tfoot {
    background-color: #0c0e16;
    color: white;
    font-weight: bold;
    tr td {
      padding: 32px;
      &:first-child {
        border-bottom-left-radius: 8px;
      }
      &:last-child {
        border-bottom-right-radius: 8px;
        font-size: 1.25rem;
      }
    }
  }
`;
