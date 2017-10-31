import axios from 'axios';
import { GET_DIVS, GET_REPS, KEY } from '../constants/constants';

const BASE_URL = 'https://www.googleapis.com/civicinfo/v2/representatives/';

export function getDivs(address) {
  const request = axios.get(BASE_URL + '?key=' + KEY + '&address=' + address);
  return { type: GET_DIVS, payload: request }
}

export function getReps(ocdId) {
  console.log('division id', ocdId)
  const request = axios.get(BASE_URL + '?key=' + KEY + '&ocdId=' + ocdId );
  return { type: GET_REPS, payload: request }
}
