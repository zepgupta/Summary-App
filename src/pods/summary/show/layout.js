import React, { PropTypes } from 'react';

export default class SummaryShowLayout extends React.Component {
  static propTypes = {
    summary: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        {this.props.summary.summarization}
      </div>
    );
  }
}
