import { SIGN_IN, SIGN_UP } from '../constants/user';

export default function(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        auth: {
          uid: action.payload.localId || false,
          token: action.payload.idToken || false,
          refToken: action.payload.refreshToken || false,
          error: action.payload.message || false,
        },
      };
    case SIGN_UP:
      return {
        ...state,
        auth: {
          uid: action.payload.localId || false,
          token: action.payload.idToken || false,
          refToken: action.payload.refreshToken || false,
          error: action.payload.message || false,
        },
      };
    default:
      return state;
  }
}
