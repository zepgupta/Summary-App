import React, { PropTypes } from 'react';

import styles from './style.css';
import logo from 'static/Drawing.png';


export default class LoginLayout extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    displayError: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
    rUsername: '',
    rEmail: '',
    rPassword: '',
    rCPassword: '',
  }

  handleLogin = () => {
    this.props.login({ username: this.state.username, password: this.state.password }, this.props.displayError);
  }

  handleRegister = () => {
    if (this.state.rUsername === "" || this.state.rEmail === "" || this.state.rPassword === "" || this.state.rCPassword === "") {
      this.props.displayError('Please complete all registration fields');
    }
    else if (this.state.rPassword !== this.state.rCPassword) {
      this.props.displayError('Passwords do not match');
    }
    else if ((this.state.rUsername !== "" && this.state.rEmail !== "" && this.state.rPassword !== "" && this.state.rCPassword !== "") && (this.state.rPassword === this.state.rCPassword)) {
      this.props.registerUser(
        {
          username: this.state.rUsername,
          email: this.state.rEmail,
          password: this.state.rPassword,
        }, this.props.displayError);
    }
  }

  render() {
    this.props.authed();

    let error = [];
    // if error dispatched
    if (this.props.error !== '') {
      error.push(
        <div>
          <p className={styles.error}> {this.props.error} </p>
        </div>
      );
    }

    return (
      <div>
        <div className={styles.introPanel}>
          <div className={styles.logoPanel}>
            <img src={logo} className={styles.logo} />
          </div>
          <div className={styles.explanation}>
            <div className={styles.intro}>
              <p>"I like to read articles, but there are too many out there of interest and not enough time."</p>
              <p className={styles.text}>This is a utility app that will allow you to provide a url to an article or paste in text and receive a summary.</p>
            </div>
          </div>
          {error}
        </div>
          <div className={styles.bottomPanel}>
            <div className={styles.loginPanel}>
              <h3 className={styles.title}>Login</h3>
              <div className={styles.inputs}>
                <p className={styles.label}>Username</p>
                <input type="text" className={styles.input} onChange= {e => this.setState({ username: e.target.value })} value={this.state.username} placeholder="Username" />
                <p className={styles.label}>Password</p>
                <input type="password" className={styles.input} onChange= {e => this.setState({ password: e.target.value })} value={this.state.password} placeholder="Password" />
                <div  className={styles.button}>
                  <button type="submit" onClick={this.handleLogin}>Login</button>
                </div>
              </div>
            </div>
            <div className={styles.registerPanel}>
              <h3 className={styles.title}>Register</h3>
              <div className={styles.inputs}>
                <p className={styles.label}>Choose a username</p>
                <input type="text" className={styles.input} onChange= {e => this.setState({ rUsername: e.target.value })} value={this.state.rUsername} placeholder="Username" />
                <p className={styles.label}>Your email</p>
                <input type="text" className={styles.input} onChange= {e => this.setState({ rEmail: e.target.value })} value={this.state.rEmail} placeholder="Email" />
                <p className={styles.label}>Choose a password</p>
                <input type="password" className={styles.input} onChange= {e => this.setState({ rPassword: e.target.value })} value={this.state.rPassword} placeholder="Password" />
                <p className={styles.label}>Confirm password</p>
                <input type="password" className={styles.input} onChange= {e => this.setState({ rCPassword: e.target.value })} value={this.state.rCPassword} placeholder="Confirm Password" />
                <div  className={styles.button}>
                  <button type="submit" onClick={this.handleRegister}>Register</button>
                </div>
              </div>
            </div>    
          </div>
        </div>
    );
  }
}
