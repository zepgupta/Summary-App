/* eslint no-unused-vars: [2, {"argsIgnorePattern": "store"}] */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SummariesNewContainer from 'pods/summarizer/container';

export default (store) => (
  <Route path="/">
    <IndexRoute component={SummariesNewContainer} />
  </Route>
);
