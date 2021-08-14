import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import { INITIAL_STATE, reducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
