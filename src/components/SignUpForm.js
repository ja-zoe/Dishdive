import React from "react";
import styles from '../styles/SignUpForm.module.css'
import classNames from "classnames";

const SignUpForm = () => {
    return (
        <div className={styles.container}>
            <div className="signUp">
                <h1 className={styles.text}> Create Your Account </h1>
                <form className={styles.form}>
                    <label className={styles.label}>
                        <span className={styles.span}> Username </span>
                        <input type='text' name='username' className={styles.input}></input>
                    </label>
                    <label className={styles.label}>
                        <span className={styles.span}> Email </span>
                        <input type='email' name='email' className={styles.input}></input>
                    </label>
                    <label className={classNames(styles.label, styles.passwordLabel)}>
                        <span className={styles.span}> Password </span>
                        <input type='password' name='password' className={styles.input}></input>
                    </label>
                    <button className={styles.signUpButton}> Sign Up </button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm