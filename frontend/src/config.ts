export const BASE_URL_SERVER = 'https://peak.pp.ua';
export const BASE_URL_LOCAL = 'http://localhost';

export const BASE_DIR = '/words/';
// export const BASE_DIR = '';


export const PASSPORT = {
  URl: BASE_URL_SERVER,
  GOOGLE: '/auth/google',
  GITHUB: '/auth/github',
  FACEBOOK: '/auth/facebook',
  TWITTER: '/auth/twitter',
  LOGIN_SUCCESS: BASE_URL_SERVER + '/auth/login/success',
  LOGOUT: BASE_URL_SERVER + '/auth/logout',
};

export const API_URL = {
  GET_ALL: '/api/posts/',
  GET_ONE: '/api/posts/',
  DELETE: '/api/posts/',
  ADD_WORD: '/api/create/',
};

export const IMG = {
  EDIT_WORD: BASE_DIR + '/images/feather2_3.png',
  DELETE_WORD: BASE_DIR + '/images/cross1_2.png',
};

export const avatar = {
  img: BASE_DIR + '/images/avatar1.png',
};

export const social_img = {
  google: BASE_DIR + '/images/google.png',
  facebook: BASE_DIR + '/images/facebook.png',
  github: BASE_DIR + '/images/github.png',
  twitter: BASE_DIR + '/images/twitter.png',
};

export const header = {
  img: BASE_DIR + '/images/uk2.png',
  word: BASE_DIR + '/images/en2.png',
  login: BASE_DIR + '/images/login1.png',
  logout: BASE_DIR + '/images/logout1.png',
};

