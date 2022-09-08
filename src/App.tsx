import React, { PropsWithChildren, useLayoutEffect } from 'react';

import PageRouter from './PageRouter';
import GlobalStyles from './utils/GlobalStyles';
import LoadingPage from './pages/Loading';
import useAuth from './hooks/useAuth';
import { useAppDispatch, useAppSelector } from './store';
import { hyderate } from './store/features/theme';
import { Helmet } from 'react-helmet';

const App: React.FC<PropsWithChildren> = () => {
  const isLoading = useAuth();
  const { theme } = useAppSelector((state) => {
    return state.theme;
  });
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const theme =
      (window.localStorage.getItem('theme') as 'dark' | 'light' | undefined) ||
      'dark';

    dispatch(hyderate(theme));
  }, []);

  return (
    <>
      <GlobalStyles theme={theme} />
      <Helmet>
        <title>Invoice App</title>
      </Helmet>
      {isLoading ? <LoadingPage /> : <PageRouter />}
    </>
  );
};

export default App;
