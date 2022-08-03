import React, { PropsWithChildren } from 'react';
import { MdBrightness5, MdBrightness4 } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../store';
import { toggle } from '../../store/features/theme';

import StyledNavbar from './styles';

const Navbar: React.FC<PropsWithChildren> = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  return (
    <StyledNavbar>
      <div className='logo'>
        <img src='/images/logo.png' alt='logo' />
      </div>
      <button onClick={() => dispatch(toggle())} className='theme-toggle'>
        {theme === 'dark' ? <MdBrightness5 /> : <MdBrightness4 />}
      </button>
    </StyledNavbar>
  );
};

export default Navbar;
