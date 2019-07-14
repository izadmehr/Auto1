import { createStore } from 'redux';
import { createBrowserHistory } from 'history';

import rootReducer from './index';

// rehydrate state on app start
const initialState = {};

// browser history
const history = createBrowserHistory();

// create store
const store = createStore(rootReducer(history), initialState);

// export store singleton instance
export default store;
