import React from 'react';
import styles from '../styles/Login.module.css'
import LoginForm from '../components/LoginForm';

function Login() {
    return(
        <div className={styles.container}>
            <LoginForm/>
        </div>
    )
}


export default Login