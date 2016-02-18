import { push } from 'react-router-redux';
import shortid from 'shortid';
import urlencode from 'urlencode';
import request from 'superagent';

import { actionTypes } from './constants';

const {
  CREATE_SUMMARY, UPDATE_SUMMARY
} = actionTypes;

export function createSummary(article) {
  return (dispatch) => {
    const id = shortid.generate();

    // Create record for summary using article
    dispatch({
      type: CREATE_SUMMARY,
      id,
      article,
     });

    // Fetch summary from api
    const url = 'http://localhost:8080/summarizeURL/' + urlencode(article);
    request
      .get(url)
      .end((err, response) => {
        // If error alert user
      	if (err) {
          dispatch({
            type: UPDATE_SUMMARY,
            id,
            summarization: 'Error in API request',
          });
      	}
        else {
          // If successfull proceeed
          console.log(response.text);

          dispatch({
            type: UPDATE_SUMMARY,
            id,
            summarization: response.text,
          });

          // Transition to summary show screen
          dispatch(push(`summaries/${id}`))
        }
      });
  };
}
