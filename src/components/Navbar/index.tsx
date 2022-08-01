import React, { PropsWithChildren } from 'react';
import { MdBrightness5, MdBrightness4 } from 'react-icons/md';

import StyledNavbar from './styles';

const Navbar: React.FC<PropsWithChildren> = () => {
  const theme = 'dark';
  return (
    <StyledNavbar>
      <div className='logo'>
        <img src='/images/logo.png' alt='logo' />
      </div>
      <div>{theme === 'dark' ? <MdBrightness5 /> : <MdBrightness4 />}</div>
    </StyledNavbar>
  );
};

export default Navbar;
