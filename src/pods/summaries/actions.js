import shortid from 'shortid';
import { actionTypes } from './constants';
const urlencode = require('urlencode');
const request = require('superagent');

const {
  CREATE_SUMMARY, UPDATE_SUMMARY
} = actionTypes;

export function createSummary(article) {
  return (dispatch) => {
    const id = shortid.generate();

    dispatch({
      type: CREATE_SUMMARY,
      id,
      article,
     });

    const url = 'http://localhost:8080/summarizeURL/' + urlencode(article);
    request
      .get(url)
      .end((err, response) => {
      	if (err) {
          dispatch({
            type: UPDATE_SUMMARY,
            id,
            summarization: 'Error in API request',
          });
      	}
        else {
          console.log(response.text);
          dispatch({
            type: UPDATE_SUMMARY,
            id,
            summarization: response.text,
          });
        }
      });
    // Create record for summary using article
    // dispatch({
    //  type: CREATE_SUMMARY,
    //  id,
    //  article,
    // });
    // Fetch summary from api
    //
    // If error alert user
    //
    // If successfull proceeed
    //
    // Update record with summary (delete article text?)
    // dispatch({
    //   type: UPDATE_SUMMARY,
    //   id,
    //   summary,
    // });
    // Transition to summary show screen
  };
}
