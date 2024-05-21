// Import necessary modules and components
import { React, useState } from "react"; 
import styles from '../styles/LoginForm.module.css' // Import CSS module styles
import classNames from "classnames"; // Utility for conditionally joining classNames
import { Link, redirect } from "react-router-dom"; // Import Link component for routing
import axios from "axios"; // Import Axios for making HTTP requests

// Define the LoginForm component as a functional component
const LoginForm = () => {
  // Use the useState hook to create state variables for username, password, and login status
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState('')

  // Define the login function to handle form submission
  const login = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if both username and password fields are not empty
    if (username.length > 0 && password.length > 0) {
      // Make a POST request to the login endpoint using Axios
      axios.post('http://localhost:3310/login', {
        username: username,
        password: password,
      })
        .then((res) => {
          // Check the response from the server
          if (res.data.message) {
            // If there is a message in the response, update the login status
            setLoginStatus(res.data.message)
          } else if (res.data.err) {
            // If there is an error in the response, log it to the console and update the login status
            console.log(res.data.err)
            setLoginStatus('Error Logging in User')
          } else {
            // If the login is successful, redirect the user to the home page
            window.location.href = '/'
          }
        })
    } else {
      // If either username or password field is empty, update the login status
      setLoginStatus('Please Enter a Username and Password!')
    }
  }

  // Render the LoginForm component
  return (
    <div className={styles.container}>
      <div className={styles.Login}>
        <h1 className={styles.texting}> Log In </h1>
        <form className={styles.form}>
          <label className={styles.label}>
            <span className={styles.span}> Username </span>
            {/* Input field for username */}
            <input
              type='text'
              name='username'
              className={styles.input}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            ></input>
          </label>
          <label className={classNames(styles.label, styles.passwordLabel)}>
            <span className={styles.span}> Password </span>
            {/* Input field for password */}
            <input
              type='password'
              name='password'
              className={styles.input}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            ></input>
          </label>
          {/* Display the login status message */}
          <h1 className={styles.loginStatus}>{loginStatus}</h1>
          {/* Link to the sign-up page */}
          <Link to='/sign-up' className={styles.accountAlready}>
            Need an Account?
          </Link>
          {/* Login button that triggers the login function when clicked */}
          <button className={styles.signInButton} onClick={login}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm