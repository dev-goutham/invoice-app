import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledInput } from './styles';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id: string;
  labelText: string;
  register: UseFormRegisterReturn<string>;
  error?: boolean;
  placeholder?: string;
};

const Input: React.FC<Props> = ({
  register,
  id,
  labelText,
  placeholder,
  error = false,
  ...props
}) => {
  return (
    <StyledInput error={error}>
      <label htmlFor={id}>{labelText}</label>
      <input
        type='text'
        id={id}
        {...register}
        placeholder={placeholder || ''}
        {...props}
      />
    </StyledInput>
  );
};

export default Input;
