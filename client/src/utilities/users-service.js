import * as usersAPI  from './users-api';

const Buffer = require('buffer/').Buffer  // import buffer without browserify note: the trailing slash is important!

export async function signUp(userData) {
  // Delete the network request code to the
  // users-api.js module which will ultimately
  // return the JWT
  const token = await usersAPI.signUp(userData);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem('token');
  // getItem will return null if no key
  if (!token) return null;
  // replace atob
  const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
  // const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // replaced atob with Buffer
  return token ? JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).user : null;
}
// ATOB() not working
//   return token ? JSON.parse(atob(token.split('.')[1])).user : null;
// }

export function logOut() {
  localStorage.removeItem('token');
}