import React, { PropsWithChildren } from 'react';
import Loading from '../../components/Loading';
import StyledLoadingPage from './styles';

const LoadingPage: React.FC<PropsWithChildren> = () => {
  return (
    <StyledLoadingPage>
      <Loading />
    </StyledLoadingPage>
  );
};

export default LoadingPage;
