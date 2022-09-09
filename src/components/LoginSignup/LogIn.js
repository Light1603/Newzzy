import React from 'react';
import Header from "../common/header/Header";
import "./SignUp.css";
import {Link} from "react-router-dom";

const LogIn = () => {
  return (
    <>
        <Header />
        <div className="signUpForm logInForm">
            <h2>LOG IN</h2>
            <input 
                type="text"
                placeholder="Enter your username or email"
            />
            <input 
                type="password"
                placeholder="Enter your password"
                maxlength="8"
            />
            <button>Log In</button>
            
            <p>
                <Link to="/resetpassword">Forgot your password?</Link>
            </p>
        </div>
    </>
  )
}

export default LogIn