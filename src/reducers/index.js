import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { summaries, error, login, fullText } from 'pods/reducers';

export default combineReducers({
  routing,
  summaries,
  error,
  login,
  fullText,
});
