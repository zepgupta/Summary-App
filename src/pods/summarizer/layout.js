import React, { PropTypes } from 'react';

export default class SummariesNewLayout extends React.Component {
  static propTypes = {
    summarizeUrl: PropTypes.func.isRequired,
  };

  state = {
    article: '',
  };

  handleChange = e => {
    this.setState({
      article: e.target.value,
    });
  }

  handleSubmit = () => this.props.summarizeUrl(this.state.article);

  render() {
    return (
      <div>
        <textarea
          value={this.state.article}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
