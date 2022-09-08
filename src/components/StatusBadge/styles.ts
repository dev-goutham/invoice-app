import styled from 'styled-components';
import { Invoice } from '../../typings/Invoice';

interface Props {
  status: Invoice['status'];
}

const StyledStatusBadge = styled.div<Props>`
  padding: 10px 25px;
  border-radius: 8px;
  text-transform: capitalize;
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-weight: bold;
  color: ${({ status }) =>
    status === 'due' ? 'rgba(255, 143, 0)' : 'rgba(51, 214, 159)'};
  background-color: ${({ status }) =>
    status === 'due' ? 'rgba(255, 143, 0, 0.06)' : 'rgba(51, 214, 159, 0.06)'};
  .dot {
    display: inline-block;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: ${({ status }) =>
      status === 'due' ? 'rgba(255, 143, 0)' : 'rgba(51, 214, 159)'};
  }
`;

export default StyledStatusBadge;
