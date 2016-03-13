//import { push } from 'react-router-redux';
import shortid from 'shortid';
import urlencode from 'urlencode';
import request from 'superagent';

import { actionTypes } from './constants';

const {
  SUMMARIZE,
  UPDATE_SUMMARIES,
  DISPLAY_ERROR,
  HIDE_ERROR,
} = actionTypes;

export function summarizeUrl(article) {
  return (dispatch) => {
    const id = shortid.generate();

    // Create record for summary using article
    dispatch({
      type: SUMMARIZE,
      id,
      article,
    });

    // Fetch summary from api
    const url = `http://localhost:8080/summarizeURL/${urlencode(article)}`;
    request
      .get(url)
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
            summary : response.body.summary,
            title : response.body.title,
          });

          // Transition to summary show screen
//          dispatch(push(`summaries/${id}`));
        }
      })
    ;
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

    // Fetch summary from api
    const url = `http://localhost:8080/summarizeText/${urlencode(title)}/${urlencode(article)}`;
    request
      .get(url)
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

          // Transition to summary show screen
//          dispatch(push(`summaries/${id}`));
        }
      });
    
  };
}

export function displayError(error) {
  return (dispatch) =>{
    dispatch({
      type: DISPLAY_ERROR,
      error,
    });

    setTimeout(function() {
      dispatch({
        type: HIDE_ERROR,
      });
    }, 3000);
  }
}