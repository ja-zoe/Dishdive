import React from 'react';
import Logo from '../assets/ddlogo2.png';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'
import classNames from 'classnames';

function Navbar(){
    const location = useLocation()
    const excludedPaths = ['/sign-up','/login']

    if(excludedPaths.includes(location.pathname)){
        return (
            <div className={styles.navbar}>
                    <div className={styles.leftSide}>
                        <Link to='/' className={styles.siteNameWrapper}>
                            <div className={styles.siteIcon}>
                                <img src={Logo} className={styles.logo} alt='logo'/>
                                <h1 className={styles.siteName}> DISHDIVE </h1>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.rightSide}>
                       
                    </div>
            </div>
        )
    } else {
        return (
            <div className={styles.navbar}>
                    <div className={styles.leftSide}>
                        <Link to='/' className={styles.siteNameWrapper}>
                            <div className={styles.siteIcon}>
                                <img src={Logo} className={styles.logo} alt='logo'/>
                                <h1 className={styles.siteName}> DISHDIVE </h1>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.rightSide}>
                        <ul className={styles.list}>
                            <li> <Link to='/login' className={classNames(styles.listItem, styles.login)}> Login </Link> </li>
                            <li className={styles.signUp}> <Link to='/sign-up' className={classNames(styles.listItem, styles.signUpLink)}> Sign Up </Link> </li>
                        </ul>
                    </div>
            </div>
        ) 
    }
}

export default Navbar