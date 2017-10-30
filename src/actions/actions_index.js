import axios from 'axios';
export const VOTER_INFO = 'VOTER_INFO';

const VOTER_INFO_URL = 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=';
const KEY = 'AIzaSyDOEO_LQZQoHpfPI_IbON70aesS-q-Wqzs';

export function getVoterInfo() {
  const request = axios.get(VOTER_INFO_URL + KEY + "&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS&electionId=2000")

  return { type: VOTER_INFO, payload: request }
}