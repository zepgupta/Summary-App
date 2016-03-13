import React, { PropTypes } from 'react';

export default class SummaryLayout extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    summary: React.PropTypes.string,
    title: React.PropTypes.string,
  };

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.summary}</p>
      </div>
    );
  }
}
