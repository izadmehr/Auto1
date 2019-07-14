import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { carsReducer } from './cars';

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    cars: carsReducer
  });

export default rootReducer;
