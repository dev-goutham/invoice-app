import { MutableRefObject, useEffect } from 'react';

const useClickAwayListener = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: MutableRefObject<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: () => any,
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useClickAwayListener;
