import React, { PropTypes } from 'react';
import Summarizer from 'pods/summarization/summarizer/container'
let RadioGroup = require('react-radio-group');

export default class InputSelector extends React.Component {
  state = {
    selectedValue: 'url',
  };

  handleChange = (e)=> {
    this.setState({
      selectedValue: e,
    });
  };

  render() {
    return (
      <div>
        <RadioGroup name='Input Type' selectedValue={this.state.selectedValue} onChange={this.handleChange}>
          {Radio => (
            <div>
              <Radio key='url' value="url" />URL
              <Radio key='text' value="text" />Text
            </div>
          )}
        </RadioGroup>
        <Summarizer inputType={this.state.selectedValue} />
      </div>
    );
  }
}
