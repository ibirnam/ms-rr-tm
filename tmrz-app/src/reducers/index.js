import { combineReducers } from 'redux';

import timersReducer from './timers-reducer';
import selectTimerReducer from './select-timer-reducer';

export default combineReducers({
  timers: timersReducer,              // array
  selectedTimer: selectTimerReducer, // int/number
});
