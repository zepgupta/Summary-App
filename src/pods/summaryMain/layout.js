import React, { PropTypes } from 'react';
import InputSelector from 'pods/summarization/inputSelector/container';
import Summaries from 'pods/summaries/container';
import Header from 'pods/header/container';

import styles from './style.css';

export default class SummariesMainLayout extends React.Component {
  static propTypes = {
    getSummaries: PropTypes.func.isRequired,
  };

  render() {
    this.props.authUrl();
    this.props.getSummaries();

    return (
      <div>
        <Header />
        <div className={styles.mainPanel}>
          <InputSelector />
          <Summaries />
        </div>
      </div>
    );
  }
}
