import React, { PropTypes } from 'react';

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
          <p className="error"> {this.props.error} </p>
        </div>
      );
    }

    return (
       <div>
         <div>
          <div>
            <h3>Login</h3>
            <input type="text" onChange= {e => this.setState({ username: e.target.value })} value={this.state.username} placeholder="Username" />
            <input type="password" onChange= {e => this.setState({ password: e.target.value })} value={this.state.password} placeholder="Password" />
          </div>
          <button type="submit" onClick={this.handleLogin}>Login</button>
        </div>
        <div>
          <div>
            <h3>Register</h3>
              <input type="text" onChange= {e => this.setState({ rUsername: e.target.value })} value={this.state.rUsername} placeholder="Username" />
              <input type="text" onChange= {e => this.setState({ rEmail: e.target.value })} value={this.state.rEmail} placeholder="Email" />
              <input type="password" onChange= {e => this.setState({ rPassword: e.target.value })} value={this.state.rPassword} placeholder="Password" />
              <input type="password" onChange= {e => this.setState({ rCPassword: e.target.value })} value={this.state.rCPassword} placeholder="Confirm Password" />
          </div>
          <button type="submit" onClick={this.handleRegister}>Register</button>
        </div>    
        {error}
      </div>
    );
  }
}
