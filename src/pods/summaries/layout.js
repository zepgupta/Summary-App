import React from 'react';
import Summary from 'pods/summaries/summary/container';

import styles from './style.css';

export default class SummariesLayout extends React.Component {

  render() {

    let sums = [];
    for (let i = 0; i < this.props.summaries.length; i++) {
      sums.push(
        <Summary
          key={'summary' + i}
          className="summary"
          summary={this.props.summaries[i].summary}
          title={this.props.summaries[i].title}
          id={this.props.summaries[i].id}
          summaryDate={this.props.summaries[i].summaryDate}
        />
      );
    }
    return (
      <div className={styles.summaryPanel}>
        <h1 className={styles.title}>My Summaries</h1>
        <div>
          {sums}
        </div>
      </div>
    );
  }
}
