import React, { PropTypes } from 'react';
import InputSelector from 'pods/summarization/inputSelector/container';
import Summaries from 'pods/summaries/container';
import Header from 'pods/header/container';
import Footer from 'pods/footer/container';

import styles from './style.css';

export default class SummariesMainLayout extends React.Component {
  static propTypes = {
    authUrl: PropTypes.func.isRequired,
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
        <Footer />
      </div>
    );
  }
}
