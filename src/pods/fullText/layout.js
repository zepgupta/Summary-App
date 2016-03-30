import React, { PropTypes } from 'react';

export default class FullTextLayout extends React.Component {
  static propTypes = {
    article: React.PropTypes.string,
    title: React.PropTypes.string,
    goTo: PropTypes.func.isRequired,
  };

  handleBack = () => {
    this.props.goTo('/home');
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.article}</p>
        <button onClick={this.handleBack}>Back</button>
      </div>
    );
  }
}
