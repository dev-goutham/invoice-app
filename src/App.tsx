import React, { PropsWithChildren, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import PageRouter from './PageRouter';
import GlobalStyles from './utils/GlobalStyles';
import { hyderate } from './store/features/theme';
import { useAppDispatch, useAppSelector } from './store';
import LoadingPage from './pages/Loading';

const App: React.FC<PropsWithChildren> = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);

  useLayoutEffect(() => {
    const theme =
      (window.localStorage.getItem('theme') as 'dark' | 'light' | undefined) ||
      'dark';

    dispatch(hyderate(theme));
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/authenticate');
    }
  }, [isAuthenticated]);

  return (
    <>
      <GlobalStyles theme={theme} />
      {isLoading ? <LoadingPage /> : <PageRouter />}
    </>
  );
};

export default App;
