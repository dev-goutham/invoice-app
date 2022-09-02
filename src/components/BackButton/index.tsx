import React, { PropsWithChildren, useEffect } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import StyledBackButton from './styles';

const BackButton: React.FC<PropsWithChildren> = () => {
  const navigate = useNavigate();

  return (
    <StyledBackButton onClick={() => navigate(-1)}>
      <span>
        <BiChevronLeft />
      </span>
      <span>Go back</span>
    </StyledBackButton>
  );
};

export default BackButton;
