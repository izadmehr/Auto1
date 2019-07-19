import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { seamlessImmutableReconciler } from 'redux-persist-seamless-immutable';
import { Persistor } from 'redux-persist/es/types';

import createRootReducer from './index';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
  whitelist: ['selectedCar'],
  stateReconciler: seamlessImmutableReconciler
};

export const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

history.listen((location, action) => {
  console.log(action, location);
});

const rootReducer = createRootReducer(history); // root reducer with router state
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(): {
  store: Store;
  persistor: Persistor;
} {
  const store = createStore(
    persistedReducer,
    undefined,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );
  const persistor = persistStore(store);

  return { store, persistor };
}
