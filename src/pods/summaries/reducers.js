import { actionTypes } from './constants';

const {
  CREATE_SUMMARY,
  UPDATE_SUMMARY,
} = actionTypes;

function updateSummary(summariesState, id, summarization) {
  return summariesState.map(summary =>
    summary.id === id
    ? Object.assign({}, summary, {
      summarization,
    })
    : summary
  );
}

export default function summariesReducer(state = [], action) {
  switch (action.type) {
    case CREATE_SUMMARY:
      return [...state, {
        id: action.id,
        article: action.article,
      }];

    case UPDATE_SUMMARY:
      return updateSummary(state, action.id, action.summarization);

    default:
      return state;
  }
}
