import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import {summaries, error} from 'pods/reducers';

export default combineReducers({
  router,
  summaries,
  error
});
