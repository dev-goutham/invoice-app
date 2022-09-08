import React, { PropsWithChildren, useRef } from 'react';
import useClickAwayListener from '../../hooks/useClickAwayListener';
import useToggle from '../../hooks/useToggle';
import Options from './Options';
import { StyledFilterBy } from './styles';
import ToggleFilterBtn from './ToggleFilterBtn';

const FilterBy: React.FC<PropsWithChildren> = () => {
  const { state: isFilterOpen, toggle, close } = useToggle();

  const ref = useRef<HTMLDivElement | null>(null);
  useClickAwayListener(ref, close);

  return (
    <StyledFilterBy ref={ref}>
      <ToggleFilterBtn isFilterOpen={isFilterOpen} toggleFilter={toggle} />
      {isFilterOpen && <Options />}
    </StyledFilterBy>
  );
};

export default FilterBy;
