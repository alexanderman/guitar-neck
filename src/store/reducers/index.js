import { combineReducers } from 'redux';
import stringsReducer from './strings';
import uiReducer from './ui';

export default combineReducers({
  strings: stringsReducer,
  ui: uiReducer
});


