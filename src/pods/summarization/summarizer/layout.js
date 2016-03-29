import React, { PropTypes } from 'react';

export default class SummarizerLayout extends React.Component {
  static propTypes = {
    summarizeUrl: PropTypes.func.isRequired,
    summarizeText: PropTypes.func.isRequired,
    displayError: PropTypes.func.isRequired,
    inputType: React.PropTypes.string,
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
      }
      else {
        this.props.summarizeUrl(this.state.article);
      }
    }
    // if text is selected...
    else {
      // if no payload in text area or title area...
      if (this.state.article.length < 1 || this.state.title.length < 1) {
        this.props.displayError('Enter a title and text to be summarized');
      }
      else {
        this.props.summarizeText(this.state.article, this.state.title);
      }
    }
  }

  render() {
    let html = [];
    // if text is selected...
    if (this.props.inputType === 'text') {
      html.push(
        <div>
          <p>Title</p>
          <input
            type="text"
            onChange= {e => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </div>
      );
    }

    let error = [];
    // if error dispatched
    if (this.props.error !== '') {
      error.push(
        <div>
          <p className="error"> {this.props.error} </p>
        </div>
      );
    }

    return (
      <div>
        {html}
        <p>Article</p>
        <textarea
          value={this.state.article}
          onChange={this.handleChange}
        />
        <button onClick= {this.handleSubmit} >Submit</button>
      {error}
      </div>
    );
  }
}
