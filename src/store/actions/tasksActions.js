import axios from 'axios';
import { GET_TASKS } from '../constants/tasks';
import { FIREBASE_URL } from '../../utils/endpoints';

const getTasks = () => {
  const request = axios({
    method: 'GET',
    url: `${FIREBASE_URL}/tasks.json`,
  }).then(
    response => {
      return response.data;
    },
    error => {
      return error;
    }
  );

  return {
    type: GET_TASKS,
    payload: request,
  };
};

export default getTasks;
