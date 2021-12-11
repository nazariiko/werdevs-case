import { combineReducers } from 'redux';
import { pageReducer } from './pageReducer';
import { selectedDateReducer } from './selectedDateReducer';

export const rootReducer = combineReducers({
  page: pageReducer,
  selectedDate: selectedDateReducer,
});