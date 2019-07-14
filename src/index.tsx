import 'regenerator-runtime/runtime';

import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { watcherSaga } from './sagas';
import App from './App';
import configureStore, {
  history,
  sagaMiddleware
} from './stores/configureStore';
import '../server/index';

const store = configureStore();

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
