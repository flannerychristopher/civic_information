import { combineReducers } from 'redux';
import DivsReducer from './divs_reducer';
import RepsReducer from './reps_reducer';

const rootReducer = combineReducers({
  divs: DivsReducer,
  reps: RepsReducer
});

export default rootReducer;