// Import necessary modules and components
import React from 'react';
import Logo from '../assets/ddlogo2.png'; // Import the logo image
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import styles from '../styles/Navbar.module.css' // Import CSS module styles
import classNames from 'classnames'; // Utility for conditionally joining classNames

// Define the Navbar component as a functional component
function Navbar() {
  const location = useLocation(); // Get the current location object from react-router-dom
  const excludedPaths = ['/sign-up', '/login'] // Define an array of paths where the login/signup links should not be shown

  // Check if the current path is in the excludedPaths array
  if (excludedPaths.includes(location.pathname)) {
    // If the current path is excluded, render the navbar without login/signup links
    return (
      <div className={styles.navbar}>
        <div className={styles.leftSide}>
          <Link to='/' className={styles.siteNameWrapper}>
            <div className={styles.siteIcon}>
              <img src={Logo} className={styles.logo} alt='logo' />
              <h1 className={styles.siteName}> DISHDIVE </h1>
            </div>
          </Link>
        </div>
        <div className={styles.rightSide}></div>
      </div>
    )
  } else {
    // If the current path is not excluded, render the navbar with login/signup links
    return (
      <div className={styles.navbar}>
        <div className={styles.leftSide}>
          <Link to='/' className={styles.siteNameWrapper}>
            <div className={styles.siteIcon}>
              <img src={Logo} className={styles.logo} alt='logo' />
              <h1 className={styles.siteName}> DISHDIVE </h1>
            </div>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <ul className={styles.list}>
            <li>
              <Link to='/login' className={classNames(styles.listItem, styles.login)}>
                Login
              </Link>
            </li>
            <li className={styles.signUp}>
              <Link to='/sign-up' className={classNames(styles.listItem, styles.signUpLink)}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar