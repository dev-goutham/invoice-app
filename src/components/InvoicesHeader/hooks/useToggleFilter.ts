import { useState } from 'react';

const useToggleFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggle = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const open = () => {
    setIsFilterOpen(true);
  };

  const close = () => {
    setIsFilterOpen(false);
  };

  return { isFilterOpen, toggle, open, close };
};

export default useToggleFilter;
