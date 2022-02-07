import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { currencyClient } from './ExchangeRates';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={currencyClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
