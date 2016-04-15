import React from 'react';
import Summarizer from 'pods/summarization/summarizer/container';
import RadioGroup from 'react-radio-group';

import styles from './style.css';

export default class InputSelector extends React.Component {
  state = {
    selectedValue: 'url',
  };

  handleChange = (e) => {
    this.setState({
      selectedValue: e,
    });
  };

  render() {
    return (
      <div className={styles.inputPanel}>
        <div className ={styles.radioSection}>
          <p className={styles.inputLabel}>Input Type: </p>
          <div className={styles.radio}>
            <RadioGroup
              name="Input Type"
              selectedValue={this.state.selectedValue}
              onChange={this.handleChange}
            >
               {Radio => (
                <div className={styles.radio}>
                  <Radio key="url" value="url" />URL
                  <Radio key="text" value="text" />Text
                </div>
              )}
            </RadioGroup>
          </div>
        </div>
        <div className={styles.summarizer}>
          <Summarizer inputType={this.state.selectedValue} />
        </div>
      </div>
    );
  }
}
