import React, { PropsWithChildren } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import StyledBackButton from './styles';

const BackButton: React.FC<PropsWithChildren> = () => {
  return (
    <StyledBackButton to='/'>
      <span>
        <BiChevronLeft />
      </span>
      <span>Go back</span>
    </StyledBackButton>
  );
};

export default BackButton;
