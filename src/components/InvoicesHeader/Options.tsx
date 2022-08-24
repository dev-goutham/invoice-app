import React from 'react';
import { Invoice } from '../../typings/Invoice';

interface Props {
  isSelected: (value: Invoice['status']) => boolean;
  select: (value: Invoice['status']) => void;
}

const Options: React.FC<Props> = ({ isSelected, select }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    select(e.target.value as Invoice['status']);
  };

  return (
    <div className='options'>
      <div className='radio-btn'>
        <input
          type='radio'
          name='options'
          checked={isSelected('paid')}
          id='paid'
          value='paid'
          onChange={handleChange}
        />
        <label htmlFor='paid'>Paid</label>
      </div>
      <div className='radio-btn'>
        <input
          type='radio'
          name='options'
          checked={isSelected('due')}
          id='due'
          value='due'
          onChange={handleChange}
        />
        <label htmlFor='due'>Due</label>
      </div>
      <div className='radio-btn'>
        <input
          type='radio'
          name='options'
          checked={isSelected('draft')}
          id='draft'
          value='draft'
          onChange={handleChange}
        />
        <label htmlFor='draft'>Draft</label>
      </div>
    </div>
  );
};

export default Options;
