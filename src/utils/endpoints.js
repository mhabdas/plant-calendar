import SECRET_KEY from '../secrets/apiKey';

export const FIREBASE_URL = 'https://plant-calendar-642b2.firebaseio.com';
export const API_KEY = SECRET_KEY;
export const SIGN_UP_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
export const SIGN_IN_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`;
