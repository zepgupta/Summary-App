import React, { PropTypes } from 'react';
import Summarizer from 'pods/summarizer/container'
import Summaries from 'pods/summaries/container'

export default class SummariesMainLayout extends React.Component {
  static propTypes = {
    
  };

  render() {
    return (
      <div>
        <Summarizer />
        <Summaries />
      </div>
    );
  }
}
