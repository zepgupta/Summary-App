import React, { PropTypes } from 'react';

import styles from './style.css';

export default class SummaryLayout extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    summary: React.PropTypes.string,
    title: React.PropTypes.string,
    summaryDate: React.PropTypes.string,
    deleteSummary: PropTypes.func.isRequired,
    showFullText: PropTypes.func.isRequired,
  };

  handleDelete = () => {
    this.props.deleteSummary(this.props.id);
  }

  handleView = () => {
    this.props.showFullText(this.props.id);
  }

  render() {
    return (
      <div className={styles.summary}>
        <div className={styles.main}>
          <div className={styles.titleLine}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <h3 className={styles.date}>Summarized on: {this.props.summaryDate}</h3>
          </div>
          <p className={styles.text}>{this.props.summary}</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={this.handleDelete}>Delete</button>
          <button className={styles.button} onClick={this.handleView}>Full Text</button>
        </div>
      </div>
    );
  }
}
