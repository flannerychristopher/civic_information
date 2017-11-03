import { GET_MEMBER } from '../constants/constants';

export default function (state = [], action) {
  switch (action.type) {
    case GET_MEMBER:
      console.log('action received in members_reducer', action);
      return action.payload.data.results[0];
    default:
      return state;
  }
} 