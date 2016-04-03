import React, { PropTypes } from 'react';
import Header from 'pods/header/container';

import styles from './style.css';

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
        <Header />
        <div className={styles.background}>
          <div className={styles.fullText}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <p className={styles.article}>{this.props.article}</p>
            <button className={styles.back} onClick={this.handleBack}>Back</button>
          </div>
        </div>
      </div>
    );
  }
}
