import React, { PropTypes } from 'react';
import InputSelector from 'pods/summarization/inputSelector/container';
import Summaries from 'pods/summaries/container';

export default class SummariesMainLayout extends React.Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    getSummaries: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    this.props.authUrl();
    this.props.getSummaries();

    return (
      <div>
        <div>
          <InputSelector />
          <Summaries />
        </div>
        <button type="button" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}
