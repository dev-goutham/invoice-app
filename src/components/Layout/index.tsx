import React, { PropsWithChildren } from 'react';
import Navbar from '../Navbar';
import StyledLayout from './styles';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
