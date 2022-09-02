import styled from 'styled-components';

const StyledBackButton = styled.button`
  text-decoration: none;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    color: var(--color-brand);
    margin-top: 2px;
    padding: 0;
  }
`;

export default StyledBackButton;
