const jwtDecode = require('jwt-decode');
import { push } from 'react-router-redux';

export default function authReq(dispatch, callback) {
  const token = localStorage.getItem('token') || null;
  const decoded = token ? jwtDecode(token) : null;
  // if no token, or it is expired...
  if (!token || decoded.exp < (Date.now() / 1000)) {
    localStorage.removeItem('token');
    dispatch(push('/'));
  } else {
    callback(token);
  }
}
