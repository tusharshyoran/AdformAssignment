import { createStore, applyMiddleware } from 'redux';
import Reducer from '../reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
