import React, { PropTypes } from 'react';
import Summary from 'pods/summaries/summary/container'

export default class SummariesLayout extends React.Component {
  static propTypes = {
  };

  render() {
    let sums = [];
    for(var i=0; i<this.props.summaries.length; i++){
      sums.push(
        <Summary className='summary' summary={this.props.summaries[i].summarization} id={this.props.summaries[i].id} /> 
      );
    }    
    return (
      <div>
        <h1>My Summaries</h1>
        <div>
          {sums}
        </div>
      </div>
    );
  }
}
