import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Import Apollo related modules
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux';

const store = createStore(rootReducer);

const cache = new InMemoryCache();

const BASE_URL = 'https://api.artsy.net/api/artworks';

const httpLink = new HttpLink({
  uri: BASE_URL,
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_ACCESS_TOKEN
    }`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
