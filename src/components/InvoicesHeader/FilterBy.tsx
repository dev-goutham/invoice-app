import React, { PropsWithChildren, useRef } from 'react';
import useClickAwayListener from '../../hooks/useClickAwayListener';
import useSelected from './hooks/useSelected';
import useToggleFilter from './hooks/useToggleFilter';
import Options from './Options';
import { StyledFilterBy } from './styles';
import ToggleFilterBtn from './ToggleFilterBtn';

const FilterBy: React.FC<PropsWithChildren> = () => {
  const { isFilterOpen, toggle, close } = useToggleFilter();
  const { select, isSelected } = useSelected();

  const ref = useRef<HTMLDivElement | null>(null);
  useClickAwayListener(ref, close);

  return (
    <StyledFilterBy ref={ref}>
      <ToggleFilterBtn isFilterOpen={isFilterOpen} toggleFilter={toggle} />
      {isFilterOpen && <Options select={select} isSelected={isSelected} />}
    </StyledFilterBy>
  );
};

export default FilterBy;
