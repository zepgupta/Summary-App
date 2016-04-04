import React, { PropTypes } from 'react';


import styles from './style.css';
import logo from 'static/Drawing.png';

export default class HeaderLayout extends React.Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

   handleLogout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div className={styles.header}>
        <img src={logo} className={styles.logo} />
        <div className={styles.buttonArea}>
          <button className={styles.logout} type="button" onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
}
