import { combineReducers } from 'redux';
import VoterInfoReducer from './voter_info_reducer';
import ElectionIdsReducer from './election_ids_reducer';

const rootReducer = combineReducers({
  electionIds: ElectionIdsReducer,
  voterInfo: VoterInfoReducer
});

export default rootReducer;