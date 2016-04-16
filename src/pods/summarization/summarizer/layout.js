import React, { PropTypes } from 'react';

import styles from './style.css';

export default class SummarizerLayout extends React.Component {
  static propTypes = {

    summarizeUrl: PropTypes.func.isRequired,
    summarizeText: PropTypes.func.isRequired,
    displayError: PropTypes.func.isRequired,
    inputType: React.PropTypes.string,
    error: React.PropTypes.string,
  };

  state = {
    article: '',
    title: '',
  };

  handleChange = e => {
    this.setState({
      article: e.target.value,
    });
  }

  handleSubmit = () => {
    // if url is selected...
    if (this.props.inputType === 'url') {
      // if there is a payload in the text area
      if (this.state.article.length < 1) {
        this.props.displayError('Please enter a URL in the text field');
      } else {
        this.props.summarizeUrl(this.state.article);
      }
    } else { // else if text is selected...
      // if no payload in text area or title area...
      if (this.state.article.length < 1 || this.state.title.length < 1) {
        this.props.displayError('Enter a title and text to be summarized');
      } else {
        this.props.summarizeText(this.state.article, this.state.title);
      }
    }
  }

  render() {
    let html;
    // if text is selected...
    if (this.props.inputType === 'text') {
      html = [];
      html.push(
        <div className={styles.titleArea}>
          <p className={styles.inputLabel}>Title</p>
          <input
            className={styles.textInput}
            type="text"
            onChange= {(e) => { this.setState({ title: e.target.value }); }}
            value={this.state.title}
          />
        </div>
      );
    }

    let error;
    // if error dispatched
    if (this.props.error !== '') {
      error = [];
      error.push(
        <div className={styles.errorContainer}>
          <p className={styles.error}> {this.props.error} </p>
        </div>
      );
    }

    return (
      <div className={styles.summarizer}>
        {html}
        <div className={styles.articleArea}>
          <p className={styles.inputLabel}>Article</p>
          <textarea
            className={styles.textArea}
            value={this.state.article}
            onChange={this.handleChange}
          />
        </div>
        <button className={styles.button} onClick={this.handleSubmit} >Submit</button>
      {error}
      </div>
    );
  }
}
