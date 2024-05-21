import { React, useState } from "react"; // Import React and useState hook
import styles from '../styles/SignUpForm.module.css'; // Import CSS module for styling
import classNames from "classnames"; // Import classNames for conditional class management
import { Link, Navigate } from "react-router-dom"; // Import Link and Navigate from react-router-dom for navigation
import axios from 'axios'; // Import axios for making HTTP requests

const SignUpForm = () => {
    // State variables to store the username, email, password, and registration status
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');

    // Function to handle the registration process
    const register = (event) => {
        event.preventDefault(); // Prevent the form from submitting and reloading the page

        // Check if all fields are filled
        if (email.length > 0 && password.length > 0 && username.length > 0) {
            // Send a POST request to the server to register the user
            axios.post('http://localhost:3310/register', {
                username: username,
                email: email,
                password: password 
            }).then((response) => {
                // Handle the response from the server
                if (response.data.userRegistered) {
                    // If registration is successful, redirect to the login page
                    window.location.href = '/login';
                } else if (response.data.message) {
                    // If there is a specific error message, display it
                    setRegistrationStatus(response.data.message);
                } else {
                    // If there is a general error, display a generic message
                    setRegistrationStatus('Error Registering User');
                }
            });
        } else {
            // Display an appropriate error message if any field is empty
            if (username.length === 0) {
                setRegistrationStatus('Please Enter A Username!');
            } else if (email.length === 0) {
                setRegistrationStatus('Please Enter An Email!');
            } else {
                setRegistrationStatus('Please Enter A Password!');
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.signUp}>
                <h1 className={styles.text}>Create Your Account</h1>
                <form className={styles.form}>
                    <label className={styles.label}>
                        <span className={styles.span}>Username</span>
                        <input type='text' name='username' className={styles.input} onChange={(e) => { setUsername(e.target.value) }}></input>
                    </label>
                    <label className={styles.label}>
                        <span className={styles.span}>Email</span>
                        <input type='email' name='email' className={styles.input} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </label>
                    <label className={classNames(styles.label, styles.passwordLabel)}>
                        <span className={styles.span}>Password</span>
                        <input type='password' name='password' className={styles.input} onChange={(e) => { setPassword(e.target.value) }}></input>
                    </label>
                    <p className={styles.registrationStatus}>{registrationStatus}</p>
                    <Link to='/login' className={styles.accountAlready}>Already Have an Account?</Link>
                    <button className={styles.signUpButton} onClick={register}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm; // Export the SignUpForm component as the default export
