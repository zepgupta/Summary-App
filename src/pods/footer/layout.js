import React from 'react';

import styles from './style.css';

export default class FooterLayout extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        Symbol graphic by <a href="http://www.freepik.com/">Freepik</a> from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a href="http://logomakr.com" title="Logo Maker">Logo Maker</a>
      </div>
    );
  }
}
