import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './stores/configureStore';
import App from './App';

const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
