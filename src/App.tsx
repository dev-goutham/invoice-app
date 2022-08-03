import React, { PropsWithChildren, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import GlobalStyles from './utils/GlobalStyles';
import { useAppDispatch, useAppSelector } from './store';
import { hyderate } from './store/features/theme';

const App: React.FC<PropsWithChildren> = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);

  useLayoutEffect(() => {
    const theme =
      (window.localStorage.getItem('theme') as 'dark' | 'light' | undefined) ||
      'dark';

    dispatch(hyderate(theme));
  }, []);
  return (
    <div>
      <GlobalStyles theme={theme} />
      <Navbar />
    </div>
  );
};

export default App;
