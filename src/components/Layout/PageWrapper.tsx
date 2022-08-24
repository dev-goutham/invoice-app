import React, { PropsWithChildren } from 'react';
import { StyledPageWrapper } from './styles';

const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
