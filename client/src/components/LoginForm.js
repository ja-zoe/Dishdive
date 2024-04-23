import { React, useState } from "react";
import styles from '../styles/LoginForm.module.css'
import classNames from "classnames";
import { Link, redirect } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
const [username,setUsername] = useState('')
const [password, setPassword] = useState('')

const [loginStatus, setLoginStatus] = useState('')

const login = (event) => {
    event.preventDefault()
    if(username.length > 0 && password.length > 0){
        axios.post('http://localhost:3310/login', 
        {
            username: username,
            password: password,
        }
    ).then( (res) => {

            if(res.data.message){
                setLoginStatus(res.data.message)
            }else if(res.data.err){
                console.log(res.data.err)
                setLoginStatus('Error Logging in User')
            }else{
                setLoginStatus('yuh')
            }

        })

    }else {
        setLoginStatus('Please Enter a Username and Password!')
    }
} 

    return (
        <div className={styles.container}>
            <div className={styles.Login}>

                <h1 className={styles.texting}> Welcome Back! </h1>

                <form className={styles.form}>
                    <label className={styles.label}>
                        <span className={styles.span}> Username </span>
                        <input type='email' name='email' className={styles.input} onChange={(e) => {setUsername(e.target.value)}}></input>
                    </label>
                    <label className={classNames(styles.label, styles.passwordLabel)}>
                        <span className={styles.span}> Password </span>
                        <input type='password' name='password' className={styles.input} onChange={(e) => {setPassword(e.target.value)}}></input>
                    </label>
                    <h1 className={styles.loginStatus}>{loginStatus}</h1>
                    <Link to='/sign-up' className={styles.accountAlready}> Need an Account? </Link>
                    <button className={styles.signInButton} onClick={login}> Login </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm