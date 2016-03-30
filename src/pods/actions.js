import { push } from 'react-router-redux';
import shortid from 'shortid';
import urlencode from 'urlencode';
import request from 'superagent';
import async from 'async';
const jwtDecode = require('jwt-decode');

import { actionTypes } from './constants';
import authReq from 'lib/authReq';

const {
  GETTING_SUMMARIES,
  SUMMARIES_RECEIVED,

  SUMMARIZE,
  UPDATE_SUMMARIES,
  UPDATE_SUMMARIES_FAIL,
  DELETE_SUMMARY,
  SHOW_FULL_TEXT,

  DISPLAY_ERROR,
  HIDE_ERROR,

  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,

  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} = actionTypes;


// *** login actions
export function login(creds, dispE) {
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
          dispE(response.body.message);
        }
        else if (!response.body.success) {
          dispatch({
            type: LOGIN_FAILURE,
            isFetching: false,
            isAuthenticated: false,
            message: response.body.message,
          });
          dispE(response.body.message);
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


// *** register actions
export function registerUser(creds,dispE) {
  return (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
      isFetching: true,
      isAuthenticated: false,
    });

    request.post('http://localhost:8080/api/register')
      .type('form')
      .send({ username: creds.username, email:creds.email, password: creds.password })
      .end(function (err, response) {
        if (err) {
          dispatch({
            type: REGISTER_FAILURE,
            isFetching: false,
            isAuthenticated: false,
            message: response.body.message,
          });
          dispE(response.body.message);
        }
        else if (!response.body.success) {
          dispatch({
            type: REGISTER_FAILURE,
            isFetching: false,
            isAuthenticated: false,
            message: response.body.message,
          });
          dispE(response.body.message);
        }
        else {
          localStorage.setItem('token', response.body.token);
          dispatch({
            type: REGISTER_SUCCESS,
            isFetching: false,
            isAuthenticated: true,
            message: 'Login successful',
            token: response.body.token,
          });
          dispatch(push('/home'));
        }
      });
  }
}


// *** summary actions
export function getSummaries(){
  return (dispatch) => {
    dispatch({
      type: GETTING_SUMMARIES,
    });
    let url = 'http://localhost:8080/api/summaries'
    request
      .get(url)
      .set({ 'x-access-token': localStorage.getItem('token') })
      .end((err, response) => {
        // If error alert user
        if (err) {
          dispatch({
            type: SUMMARIES_RECEIVED,
            summaries: ['Error in API request'],
          });
        } else {
          dispatch({
            type: SUMMARIES_RECEIVED,
            summaries: response.body.summaries,
          });
        }
      });
  }
}

export function summarizeUrl(article) {
  return (dispatch) => {
    // temp id
    const id = 'new';

    // Create record for summary using article
    dispatch({
      type: SUMMARIZE,
      id,
      article,
    });

    async.waterfall([
      // make sure authentication is valid.
      // if not, authReq will redirect the user to the login page.
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
                type: UPDATE_SUMMARIES_FAIL,
                message: 'Error in API request',
              });
            } else {
              dispatch({
                type: UPDATE_SUMMARIES,
                id: response.body.id,
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
    // temp id
    const id = 'new';
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
                type: UPDATE_SUMMARIES_FAIL,
                message: 'Error in API request',
              });
            } else {
              dispatch({
                type: UPDATE_SUMMARIES,
                id: response.body.id,
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

export function deleteSummary(id) {
  return (dispatch) => {
    const url = 'http://localhost:8080/api/'+id;
    request
      .delete(url)
      .set({ 'x-access-token': localStorage.getItem('token') })
      .end((err, response) => {
        if (err) {
          // a spot for future error display if desired
        }
        else if (response.success === false) {
          // a spot for future error display if desired
        }
        else{
          dispatch({
            type: DELETE_SUMMARY,
            id,
          });
        }
      });
  }
}

export function showFullText(id) {
  return (dispatch) => {
    var url = 'http://localhost:8080/api/fullText/'+id;
    request
      .get(url)
      .set({ 'x-access-token': localStorage.getItem('token') })
      .end((err, response) => {
        if(err){
          console.error('API error');
        }
        else{
          dispatch({
            type: SHOW_FULL_TEXT,
            id,
            title: response.body.title,
            article: response.body.article,
          });
          dispatch(push('/fullText'));
        }
      });
  }
}

// *** display error actions
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


// *auth checks (no actions actually dispatched since the actions are url changes)
export function authUrl(){
  return (dispatch) => {
    let token = localStorage.getItem('token') || null;
    let decoded = token ? jwtDecode(token) : null;
    // if no token, or it is expired...
    if ( !token || decoded.exp < (Date.now()/1000) ) {
      localStorage.removeItem('token');
      dispatch(push('/'));
    }
  }
};

export function authed(){
  return (dispatch) => {
    let token = localStorage.getItem('token') || null;
    let decoded = token ? jwtDecode(token) : null;
    // if no token, or it is expired...
    if ( token && decoded.exp > (Date.now()/1000) ) {
      dispatch(push('/home'));
    }
  }
};


// *utility
export function goTo(path) {
  return (dispatch) => {
    dispatch(push(path));
  }
}