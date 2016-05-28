import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import { Link } from 'react-router'

/* eslint-disable react/prefer-stateless-function */
export default class NavBar extends React.Component {

  render() {
    return (
      <nav className={ styles.navbar }>
        <a href="#" className={ styles.navbarBrand }>Docker Director</a>
        <ul className={ styles.navbarNav }>
          <li><Link to="/" className={ styles.navbarLink } activeClassName={styles.active}>Dashboard</Link></li>
          <li><Link to="containers" className={ styles.navbarLink } activeClassName={styles.active}>Containers</Link></li>
        </ul>
        123
      </nav>
    );
  }
}
