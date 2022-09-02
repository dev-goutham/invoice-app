import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prev) => !prev);
  };

  const close = () => {
    setState(false);
  };

  const open = () => {
    setState(true);
  };

  return { state, toggle, close, open };
};

export default useToggle;
