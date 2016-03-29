import { actionTypes } from './constants';

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

// summary reducer
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

// error reducer
export function error(state = [], action) {
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

// login reducer
export function login(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
  }, action) {
  switch (action.type) {

    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isFetching,
        message: action.message,
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        message: action.message,
      });

    case LOGOUT:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
      });

    default:
      return state;
  }
}
