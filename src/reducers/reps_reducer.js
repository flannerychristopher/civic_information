import { GET_REPS } from '../constants/constants';
// import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_REPS:
      console.log('action received in reps_reducer', action);

      // let offices = action.payload.data.offices;
      // offices = Object.entries(offices);
      // console.log('offices ', offices);

      // let officials = action.payload.data.officials;
      // console.log('officials ', officials);



      // return {
      //   divisions: action.payload.data.divisions,
      //   offices: action.payload.data.offices,
      //   officials: action.payload.data.officials
      // }

      return {}
    default:
      return state;
  }
} 