import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledInput } from './styles';

interface Props {
  id: string;
  labelText: string;
  register: UseFormRegisterReturn<string>;
  error?: boolean;
  placeholder?: string;
}

const Input: React.FC<Props> = ({
  register,
  id,
  labelText,
  placeholder,
  error = false,
}) => {
  return (
    <StyledInput error={error}>
      <label htmlFor={id}>{labelText}</label>
      <input
        type='text'
        id={id}
        {...register}
        placeholder={placeholder || ''}
      />
    </StyledInput>
  );
};

export default Input;
