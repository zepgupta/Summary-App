import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import summaries from 'pods/reducers';

export default combineReducers({
  router,
  summaries,
});
