import { combineReducers } from 'redux';
import MembersReducer from './members_reducer';
import MemberReducer from './member_reducer';

const rootReducer = combineReducers({
  members: MembersReducer,
  currentMember: MemberReducer
});

export default rootReducer;