import axios from 'axios';
import { SIGN_IN, SIGN_UP } from '../constants/user';
import { SIGN_IN_URL, SIGN_UP_URL, FIREBASE_URL, REFRESH } from '../../utils/endpoints';

const signUp = form => {
  const request = axios({
    method: 'POST',
    url: SIGN_UP_URL,
    data: {
      email: form.email,
      password: form.password,
      returnSecureToken: true,
    },
    header: {
      'Content-Type': 'application/json',
    },
  }).then(
    response => {
      return response.data;
    },
    error => {
      return error.response.data.error;
    }
  );

  return {
    type: SIGN_UP,
    payload: request,
  };
};

const signIn = form => {
  const request = axios({
    method: 'POST',
    url: SIGN_IN_URL,
    data: {
      email: form.email,
      password: form.password,
      returnSecureToken: true,
    },
    header: {
      'Content-Type': 'application/json',
    },
  }).then(
    response => {
      console.log(response.data);
      return response.data;
    },
    error => {
      return error.response.data.error;
    }
  );

  return {
    type: SIGN_IN,
    payload: request,
  };
};

export { signIn, signUp };
