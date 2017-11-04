
import { GET_VOTES } from '../constants/constants';

export default function (state = {}, action) {
  console.log('action received in votes_reducer', action);
  switch (action.type) {
    case GET_VOTES:
      return action.payload.data.results[0];
    default:
      return state;
  }
} 