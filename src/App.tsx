import React, { PropsWithChildren, useLayoutEffect } from 'react';
import GlobalStyles from './utils/GlobalStyles';
import { useAppDispatch, useAppSelector } from './store';
import { hyderate } from './store/features/theme';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import Layout from './components/Layout';

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
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/invoice/:id' element={<Invoice />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
