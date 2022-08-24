import React from 'react';
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri';

interface Props {
  toggleFilter: () => void;
  isFilterOpen: boolean;
}

const ToggleFilterBtn: React.FC<Props> = ({ isFilterOpen, toggleFilter }) => {
  return (
    <button onClick={toggleFilter} className='filter-by'>
      <span>Filter by status</span>
      <span>
        {isFilterOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </span>
    </button>
  );
};

export default ToggleFilterBtn;
