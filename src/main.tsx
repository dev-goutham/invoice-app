import { Auth0Provider } from '@auth0/auth0-react';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';
import invoiceApi from './store/api';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider domain={domain} clientId={clientId}>
        <StoreProvider store={store}>
          {/* <ApiProvider api={invoiceApi}> */}
          <App />
          {/* </ApiProvider> */}
        </StoreProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
