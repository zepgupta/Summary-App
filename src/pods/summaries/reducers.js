import { actionTypes } from './constants';

const {
  CREATE_SUMMARY, UPDATE_SUMMARY
} = actionTypes;

export default function summariesReducer(state = [], action) {
  switch (action.type) {
    case CREATE_SUMMARY:
      return [...state, {
        id: action.id,
        article: action.article,
      }];
    case UPDATE_SUMMARY:
      return [...state, {
        id: action.id,
        summary: action.summary,
      }];
    default:
      return state;
  }
}
