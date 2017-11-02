import { GET_DIVS } from '../constants/constants';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_DIVS:
      console.log('action received in divs_reducer', action);          

      // let divisions = Object.entries(action.payload.data.divisions);

      // divisions = divisions.map(division => {
      //   return { 
      //     divisionId: division[0], 
      //     name: division[1]['name'], 
      //     officeIndices: division[1]['officeIndices'] 
      //   }
      // });

      // return divisions;
      return action.payload;
    default:
      return state;
  }
} 