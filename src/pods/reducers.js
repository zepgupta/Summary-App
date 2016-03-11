import { actionTypes } from './constants';

const {
  SUMMARIZE,
  UPDATE_SUMMARIES,
} = actionTypes;

function updateSummaries(summariesState, id, summarization) {
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
    case SUMMARIZE:
      return [...state, {
        id: action.id,
        article: action.article,
      }];

    case UPDATE_SUMMARIES:
      return updateSummaries(state, action.id, action.summarization);

    default:
      return state;
  }
}
