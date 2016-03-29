const jwtDecode = require('jwt-decode');
import { push } from 'react-router-redux';

export default function authReq(dispatch, callback) {
  let token = localStorage.getItem('token') || null;
  let decoded = token ? jwtDecode(token) : null;
  // if no token, or it is expired...
  if ( !token || decoded.exp < (Date.now()/1000) ) {
    localStorage.removeItem('token');
    dispatch(push('/'));
  }
  else {
    callback(token);
  }
}
