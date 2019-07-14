import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './index';

export const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

history.listen((location, action) => {
  console.log(action, location);
});

export default function configureStore() {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    undefined,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );

  return store;
}
