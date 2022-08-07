import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { combineProviders } from './utils/combineProviders';
import { ModalProvider } from './context/modalContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { TokenUserProvider } from './context/tokenUserContext';
import { LoginProvider } from './context/loginContext';
import { UserProvider } from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Providers = combineProviders([
  ModalProvider,
  TokenUserProvider,
  LoginProvider,
  UserProvider
])

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ToastContainer />
        <App/>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
