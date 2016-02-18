import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import summariesReducer from 'pods/summaries/reducers';

export default combineReducers({
  router,
  summariesReducer
});
