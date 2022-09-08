import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { changeFilterBy } from '../../store/features/filterBy';

const Options: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filterBy } = useAppSelector((state) => state.filterBy);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilterBy(e.target.value as 'all' | 'paid' | 'due'));
  };

  return (
    <div className='options'>
      <div className='radio-btn'>
        <input
          type='radio'
          name='options'
          checked={filterBy === 'all'}
          id='all'
          value='all'
          onChange={handleChange}
        />
        <label htmlFor='all'>All</label>
      </div>
      <div className='radio-btn'>
        <input
          type='radio'
          name='options'
          checked={filterBy === 'paid'}
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
          checked={filterBy === 'due'}
          id='due'
          value='due'
          onChange={handleChange}
        />
        <label htmlFor='due'>Due</label>
      </div>
    </div>
  );
};

export default Options;
