import React from 'react';
import { Invoice } from '../../typings/Invoice';
import StyledStatusBadge from './styles';

interface Props {
  status: Invoice['status'];
}

const StatusBadge: React.FC<Props> = ({ status }) => {
  return (
    <StyledStatusBadge status={status}>
      <span className='dot'></span>
      <span>{status}</span>
    </StyledStatusBadge>
  );
};

export default StatusBadge;
