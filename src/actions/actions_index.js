import axios from 'axios';

import {
  GET_MEMBERS,
  CLEAR_MEMBERS,
  GET_VOTES,
  GET_MEMBER,
  PROPUBLICA_KEY
} from '../constants/constants';

const axiosAPI = axios.create({
  baseURL: 'https://api.propublica.org/congress/v1/members/',
  headers: { "X-API-Key": PROPUBLICA_KEY }
})

export function getMembers(STATE, chamber) {
  const request = axiosAPI.get(chamber + '/' + STATE + '/current.json');
  return { type: GET_MEMBERS, payload: request }
}

export function clearMembers() {
  return { type: CLEAR_MEMBERS }
}

export function getVotes(id) {
  const request = axiosAPI.get(id + '/votes.json');
  return { type: GET_VOTES, payload: request }
}

export function getMember(id) {
  const request = axiosAPI.get(id + '.json');
  return { type: GET_MEMBER, payload: request }
}