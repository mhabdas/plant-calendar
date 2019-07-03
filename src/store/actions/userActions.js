import axios from 'axios';
import { SIGN_IN, SIGN_UP } from '../constants/user';

const signUp = form => {
  return {
    type: SIGN_UP,
    payload: {
      email: form.email,
      token: 'kjwkdkdjwkedjkewjdk',
    },
  };
};

const signIn = form => {
  return {
    type: SIGN_IN,
    payload: {
      email: form.email,
      token: 'kjwkdkdjwkedjkewjdk',
    },
  };
};

export { signIn, signUp };
