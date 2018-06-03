import { combineReducers } from 'redux';
import mainReducer from './main';
import stringsReducer from './strings';

export default combineReducers({
  main: mainReducer,
  strings: stringsReducer
});


