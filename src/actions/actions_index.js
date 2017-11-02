import axios from 'axios';
import { GET_DIVS, GET_REPS, KEY } from '../constants/constants';

const BASE_URL = 'https://api.propublica.org/congress/v1/members/';

const axiosAPI = axios.create({
  baseURL: 'https://api.propublica.org/congress/v1/members/',
  headers: { "X-API-Key": KEY }
})

export function getDivs(address) {
  const request = axiosAPI.get('senate/CO/current.json');
  return { type: GET_DIVS, payload: request }
}

export function getReps(ocdId) {
  console.log('division id', ocdId)
  const request = axios.get(BASE_URL + ocdId + '?key=' + KEY);
  return { type: GET_REPS, payload: request }
}
