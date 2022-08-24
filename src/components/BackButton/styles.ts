import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBackButton = styled(Link)`
  text-decoration: none;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    color: var(--color-brand);
    /* font-size: 1rem; */
    margin-top: 2px;
    padding: 0;
  }
`;

export default StyledBackButton;
