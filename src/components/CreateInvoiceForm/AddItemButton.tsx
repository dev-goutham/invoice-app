import React from 'react';
import { StyledAddItemButton } from './styles';

interface Props {
  addItem: () => void;
}

const AddItemButton: React.FC<Props> = ({ addItem }) => {
  return (
    <StyledAddItemButton onClick={addItem}>
      <span>+</span>
      <span>Add New Item</span>
    </StyledAddItemButton>
  );
};

export default AddItemButton;
