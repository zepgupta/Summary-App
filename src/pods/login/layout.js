import React, { PropTypes } from 'react';

export default class LoginLayout extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
  }

  handleSubmit = () => {
    this.props.login({ username: this.state.username, password: this.state.password });
  }

  render() {
    return (
       <div>
        <div>
          <input type="text" onChange= {e => this.setState({ username: e.target.value })} value={this.state.username} placeholder="Username" />
          <input type="password" onChange= {e => this.setState({ password: e.target.value })} value={this.state.password} placeholder="Password" />
        </div>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
