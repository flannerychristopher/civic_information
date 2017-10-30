import { VOTER_INFO } from '../actions/actions_index';

export default function (state = [], action) {
  switch (action.type) {
    case VOTER_INFO:
      console.log('action received in voter_info_reducer', action);
      return [ ...state, action.payload.data ];
    default:
      return state;
  }
} 