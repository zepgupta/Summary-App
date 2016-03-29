import { push } from 'react-router-redux';
import shortid from 'shortid';
import urlencode from 'urlencode';
import request from 'superagent';
import async from 'async';

import { actionTypes } from './constants';
import authReq from 'lib/authReq';

const {
  SUMMARIZE,
  UPDATE_SUMMARIES,

  DISPLAY_ERROR,
  HIDE_ERROR,

  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} = actionTypes;

// *** login actions
export function login(creds) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
      isFetching: true,
      isAuthenticated: false,
    });

    request.post('http://localhost:8080/api/authenticate')
      .type('form')
      .send({ username: creds.username, password: creds.password })
      .end(function (err, response) {
        if (err) {
          dispatch({
            type: LOGIN_FAILURE,
            isFetching: false,
            isAuthenticated: false,
            message: response.body.message,
          });
        }
        else if (!response.body.success) {
          dispatch({
            type: LOGIN_FAILURE,
            isFetching: false,
            isAuthenticated: false,
            message: response.body.message,
          });
        }
        else {
          localStorage.setItem('token', response.body.token);
          dispatch({
            type: LOGIN_SUCCESS,
            isFetching: false,
            isAuthenticated: true,
            message: 'Login successful',
            token: response.body.token,
          });
          dispatch(push('/home'));
        }
      });
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
      type: LOGOUT,
      isFetching: false,
      isAuthenticated: false,
    });
    dispatch(push('/'));
  };
}

// *** summary actions
export function summarizeUrl(article) {
  return (dispatch) => {
    // MOVING ID GENERATION TO SERVER
    const id = shortid.generate();

    // Create record for summary using article
    dispatch({
      type: SUMMARIZE,
      id,
      article,
    });

    async.waterfall([
      // make sure authentication is valid.
      // if not, authReq qill redirect the user to the login page.
      function (callback) {
        authReq(dispatch, function (token) {
          callback(null, token);
        });
      },
      // Fetch summary from api with token attached
      function (token, callback) {
        const url = `http://localhost:8080/api/summarizeURL/${urlencode(article)}`;
        request
          .get(url)
          .set({ 'x-access-token': token })
          .end((err, response) => {
            // If error alert user
            if (err) {
              dispatch({
                type: UPDATE_SUMMARIES,
                id,
                summarization: 'Error in API request',
              });
            } else {
              dispatch({
                type: UPDATE_SUMMARIES,
                id,
                summary: response.body.summary,
                title: response.body.title,
              });
            }
          });
        callback(null);
      },
    ]);
  };
}

export function summarizeText(article, title) {
  return (dispatch) => {
    const id = shortid.generate();
    // Create record for summary using article
    dispatch({
      type: SUMMARIZE,
      id,
      article,
    });

    async.waterfall([
      function (callback){
        authReq(dispatch, function (token) {
          callback(null, token);
        });
      },
      function (token, callback) {
        // Fetch summary from api
        const url = `http://localhost:8080/api/summarizeText/${urlencode(title)}/${urlencode(article)}`;
        request
          .get(url)
          .set({ 'x-access-token': token })
          .end((err, response) => {
            // If error alert user
            if (err) {
              dispatch({
                type: UPDATE_SUMMARIES,
                id,
                summarization: 'Error in API request',
              });
            } else {
              dispatch({
                type: UPDATE_SUMMARIES,
                id,
                summary: response.body.summary,
                title: response.body.title,
              });
            }
        });
        callback(null);
      },
    ]);
  };
}

// *** summary error actions
export function displayError(error) {
  return (dispatch) => {
    dispatch({
      type: DISPLAY_ERROR,
      error,
    });

    setTimeout(function () {
      dispatch({
        type: HIDE_ERROR,
      });
    }, 3000);
  };
}
