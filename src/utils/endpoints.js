import SECRET_KEY from '../secrets/apiKey';

export const FIREBASE_URL = 'https://breakfast-app-f2aca.firebaseio.com';
export const API_KEY = SECRET_KEY;
export const SIGN_UP_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
export const SIGN_IN_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;
