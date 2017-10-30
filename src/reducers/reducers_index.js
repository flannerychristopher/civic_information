import { combineReducers } from 'redux';
import VoterInfoReducer from './voter_info_reducer';

const rootReducer = combineReducers({
  voterInfo: VoterInfoReducer
});

export default rootReducer;