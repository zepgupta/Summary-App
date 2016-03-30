import React, { PropTypes } from 'react';

export default class SummaryLayout extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    summary: React.PropTypes.string,
    title: React.PropTypes.string,
    deleteSummary: PropTypes.func.isRequired,
    showFullText: PropTypes.func.isRequired,
  };

  handleDelete = () => {
    this.props.deleteSummary( this.props.id );
  }

  handleView = () => {
    this.props.showFullText( this.props.id );
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.summary}</p>
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleView}>Full Text</button>
      </div>
    );
  }
}
