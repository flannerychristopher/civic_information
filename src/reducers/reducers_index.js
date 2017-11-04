import { combineReducers } from 'redux';
import MembersReducer from './members_reducer';
import MemberReducer from './member_reducer';
import VotesReducer from './votes_reducer';

const rootReducer = combineReducers({
  members: MembersReducer,
  currentMember: MemberReducer,
  currentVotes: VotesReducer
});

export default rootReducer;