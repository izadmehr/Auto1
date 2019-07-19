import 'regenerator-runtime/runtime';

import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { watcherSaga } from './sagas';
import App from './App';
import configureStore, {
  history,
  sagaMiddleware
} from './stores/configureStore';

const { store, persistor } = configureStore();

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
