import shortid from 'shortid';
import { actionTypes } from './constants';

const {
  CREATE_SUMMARY,
} = actionTypes;

export function createSummary(article) {
  return (dispatch, getState) => {
    const id = shortid.generate();

    // Create record for summary using article
    dispatch({
      type: CREATE_SUMMARY,
      id,
      article,
    });
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
  }
}