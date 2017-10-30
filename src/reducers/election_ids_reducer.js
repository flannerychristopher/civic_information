import { ELECTION_IDS } from '../actions/actions_index';

export default function(state =[], action) {
  switch(action.type) {
    case ELECTION_IDS:
      console.log('action received in election_id_reducer', action);
      return [ action.payload.data.elections, ...state ];
    default:
      return state;
  }
}