import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ProductProvider} from './Components/Contexts/ProductContext';
import { FilterProvider } from './Components/Contexts/FilterContext';
import { CartProvider } from './Components/Contexts/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const domain=process.env.REACT_APP_DOMAIN
const client=process.env.REACT_APP_CLIENT_ID

root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={client}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ProductProvider>
      <FilterProvider>
        <CartProvider>
        <App />
        </CartProvider>
    </FilterProvider>
    </ProductProvider>
    </Auth0Provider>
  </React.StrictMode>
);


