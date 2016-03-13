import React, { PropTypes } from 'react';
import InputSelector from 'pods/summarization/inputSelector/container'
import Summaries from 'pods/summaries/container'

export default class SummariesMainLayout extends React.Component {
  static propTypes = {
    
  };

  render() {
    return (
      <div>
        <InputSelector />
        <Summaries />
      </div>
    );
  }
}
