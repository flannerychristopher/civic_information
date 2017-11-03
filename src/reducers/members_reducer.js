import { GET_MEMBERS, CLEAR_MEMBERS } from '../constants/constants';
// import _ from 'lodash';

export default function (state = [], action) {
  console.log('action received in members_reducer', action);
  switch (action.type) {
    case GET_MEMBERS:
      return [ ...action.payload.data.results, ...state];
    case CLEAR_MEMBERS:
      return [];
    default:
      return state;
  }
} 