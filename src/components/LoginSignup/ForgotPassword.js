import React from 'react';
import Header from "../common/header/Header";
import "./SignUp.css";

const ForgotPassword = () => {
  return (
    <>
        <Header />
        <div className="signUpForm logInForm resetPasswordForm">
            <h2>FORGOT PASSWORD</h2>
            <p>Forgot your password? Enter your email address and we’ll send you a link to create a new one.</p>

            <input 
                type="email"
                placeholder="Enter your email"
            />
        
            <button>Reset Password</button>
        </div>
    </>
  )
}

export default ForgotPassword;