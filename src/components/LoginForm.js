import React from "react";
import styles from '../styles/LoginForm.module.css'
import classNames from "classnames";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Login}>

                <h1 className={styles.texting}> Welcome Back! </h1>

                <form className={styles.form}>
                    <label className={styles.label}>
                        <span className={styles.span}> Email </span>
                        <input type='email' name='email' className={styles.input}></input>
                    </label>
                    <label className={classNames(styles.label, styles.passwordLabel)}>
                        <span className={styles.span}> Password </span>
                        <input type='password' name='password' className={styles.input}></input>
                    </label>
                    <Link to='/sign-up' className={styles.accountAlready}> Need an Account? </Link>
                    <button className={styles.signInButton}> Login </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm