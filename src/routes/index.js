/* eslint no-unused-vars: [2, {"argsIgnorePattern": "store"}] */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';
import IndexContainer from 'pods/index/container';

export default (store) => (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={IndexContainer} />
  </Route>
);
