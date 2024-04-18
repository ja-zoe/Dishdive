import React from 'react';
import styles from '../styles/SignUp.module.css';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
        return(
            <div className={styles.container}>
                <SignUpForm/>
            </div>
        )
}

export default SignUp