/* eslint no-unused-vars: [2, {"argsIgnorePattern": "store"}] */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SummaryMainContainer from 'pods/summaryMain/container';
import LoginContainer from 'pods/login/container';

export default (store) => (
  <Route path="/">
    <IndexRoute component={LoginContainer} />
    <Route path="home" component={SummaryMainContainer}/>
  </Route>
);
