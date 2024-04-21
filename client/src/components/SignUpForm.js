import { React, useState } from "react";
import styles from '../styles/SignUpForm.module.css'
import classNames from "classnames";
import { Link } from "react-router-dom";
import axios from 'axios';

const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registrationStatus, setRegistrationStatus] = useState('')

    const register = (event) => {
        event.preventDefault()
        if(email.length>0&&password.length>0&&username.length>0){
            axios.post('http://localhost:3310/register', {
                username: username,
                email: email,
                password: password 
            }).then((response)=>{
                    setRegistrationStatus(response.data.message)
                })
        }else{
            if(username.length==0){
                setRegistrationStatus('Please enter a username!')
            }else if(email.length==0){
                setRegistrationStatus('Please enter an email!')
            }else{
                setRegistrationStatus('Please enter a password!')
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.signUp}>
                <h1 className={styles.text}> Create Your Account </h1>
                <form className={styles.form}>
                    <label className={styles.label}>
                        <span className={styles.span}> Username </span>
                        <input type='text' name='username' className={styles.input} onChange={(e)=>{setUsername(e.target.value)}}></input>
                    </label>
                    <label className={styles.label}>
                        <span className={styles.span}> Email </span>
                        <input type='email' name='email' className={styles.input} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </label>
                    <label className={classNames(styles.label, styles.passwordLabel)}>
                        <span className={styles.span}> Password </span>
                        <input type='password' name='password' className={styles.input} onChange={(e)=>{setPassword(e.target.value)}}></input>
                    </label>
                    <p className={styles.registrationStatus}>{registrationStatus}</p>
                    <Link to='/login' className={styles.accountAlready}> Already Have an Account? </Link>
                    <button className={styles.signUpButton} onClick={register}> Sign Up </button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm