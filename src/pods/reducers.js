import { actionTypes } from './constants';

const {
  SUMMARIZE,
  UPDATE_SUMMARIES,
  DISPLAY_ERROR,
  HIDE_ERROR
} = actionTypes;

function updateSummaries(summariesState, id, title, summary) {
  return summariesState.map(obj =>
    obj.id === id
    ? Object.assign({}, obj, {
      title,
      summary,
    })
    : obj
  );
}

//reducer
export function summaries(state = [], action) {
  switch (action.type) {
    
    case SUMMARIZE:
      return [...state, {
        id: action.id,
        article: action.article,
      }];

    case UPDATE_SUMMARIES:
      return updateSummaries(state, action.id, action.title, action.summary);

    default:
      return state;
  }
}

//reducer
export function error(state = [], action){
  switch (action.type) {
    
    case DISPLAY_ERROR:
      return [...state, {
        error: action.error,
      }];

    case HIDE_ERROR:
      return [...state, {
        error: '',
      }];

    default:
      return state;
  }
}