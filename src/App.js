import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Homepages from "./components/HomePage/Homepages";
import Advertisement from "../src/components/common/advertisement/Advertisement";
import Header from "./components/common/header/Header";
import SignUp from "./components/LoginSignup/SignUp";
import LogIn from "./components/LoginSignup/LogIn";
import ForgotPassword from './components/LoginSignup/ForgotPassword';

const App = () => {
  return ( 
    <>
      <Router>
        <Header />
        <Advertisement />
        <Routes>
          <Route exact path='/' element={<Homepages />} />
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/resetpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
