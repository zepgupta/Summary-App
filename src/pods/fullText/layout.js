import React, { PropTypes } from 'react';
import Header from 'pods/header/container';
import Footer from 'pods/footer/container';

import styles from './style.css';

export default class FullTextLayout extends React.Component {
  static propTypes = {
    article: React.PropTypes.string,
    title: React.PropTypes.string,
    publishDate: React.PropTypes.string,
    summaryDate: React.PropTypes.string,
    url: React.PropTypes.string,
    author: React.PropTypes.string,
    goTo: PropTypes.func.isRequired,
  };

  handleBack = () => {
    this.props.goTo('/home');
  }

  render() {
    let urlInfo = [];
    if (this.props.publishDate !== 'not applicable') {
      urlInfo.push(<p className={styles.info}><b>Published on:</b> {this.props.publishDate}</p>);
    }
    if (this.props.author !== 'not applicable') {
      urlInfo.push(<p className={styles.info}><b>Author:</b> {this.props.author}</p>);
    }
    if (this.props.author !== 'not applicable') {
      urlInfo.push(<a className={styles.info} href={this.props.url}><b>Original article</b></a>);
    }
    urlInfo.push(<p className={styles.info}><b>Summarized on:</b> {this.props.summaryDate}</p>);

    return (
      <div>
        <Header />
        <div className={styles.background}>
          <div className={styles.fullText}>
            <div className={styles.titleBar}>
              <h3 className={styles.title}>{this.props.title}</h3>
              <div className={styles.titleInfo}>
                {urlInfo}
              </div>
            </div>
            <div className={styles.articlePanel}>
              <p className={styles.article}>{this.props.article}</p>
              <button className={styles.back} onClick={this.handleBack}>Back</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
