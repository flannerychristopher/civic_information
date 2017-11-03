import axios from 'axios';
import { GET_MEMBERS, CLEAR_MEMBERS, GET_MEMBER, KEY } from '../constants/constants';

// const BASE_URL = 'https://api.propublica.org/congress/v1/members/';

const axiosAPI = axios.create({
  baseURL: 'https://api.propublica.org/congress/v1/members/',
  headers: { "X-API-Key": KEY }
})

export function getMembers(STATE, chamber) {
  const request = axiosAPI.get(chamber + '/' + STATE + '/current.json');
  return { type: GET_MEMBERS, payload: request }
}

export function clearMembers() {
  return { type: CLEAR_MEMBERS }
}

export function getMember(id) {
  const request = axiosAPI.get(id);
  return { type: GET_MEMBER, payload: request }
}