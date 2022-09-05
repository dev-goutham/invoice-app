import React, { PropsWithChildren } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Authenticate from './pages/Authenticate';
import CreateInvoice from './pages/CreateInvoice';
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import NotFound from './pages/_404';

const PageRouter: React.FC<PropsWithChildren> = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path='/invoice/:id'
        element={
          <Layout>
            <Invoice />
          </Layout>
        }
      />
      <Route
        path='/create-invoice'
        element={
          <Layout>
            <CreateInvoice />
          </Layout>
        }
      />
      <Route path='/authenticate' element={<Authenticate />} />
      <Route
        path='*'
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  );
};

export default PageRouter;
