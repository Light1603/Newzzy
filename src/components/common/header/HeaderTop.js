
import React from "react";
import ProjectLogo from "../../../images/project-logo.png";
import {BiSearch} from "react-icons/bi";
import "./HeaderTop.css";
import {Link} from "react-router-dom";

const HeaderTop = () => {
    return (
        <div className="app__header-top">
            <div className="app__header-top-img-container">
                <Link to="/">
                    <img src={ProjectLogo} alt="project logo" />
                </Link>
            </div>

            <div className="app__header-top-searchbar">
                <BiSearch className="app__header-top-searchbar-icon" />
                <input 
                    type="text" 
                    placeholder="Search for the verified news" 
                />
            </div>

            <nav className="app__header-top-navbar">
                <ul className="app__header-top-navbar-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Log In</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderTop;