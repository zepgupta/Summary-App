import React, { PropTypes } from 'react';

export default class SummariesNewLayout extends React.Component {
  static propTypes = {
    createSummary: PropTypes.func.isRequired,
  };

  state = {
    article: ''
  };

  render() {
    return (
      <div>
        <textarea
          value={this.state.article}
          onChange={(e) => this.setState({
            article: e.target.value
          })}
        />
        <button onClick={() => this.props.createSummary(this.state.article)}>Submit</button>
      </div>
    );
  }
}
