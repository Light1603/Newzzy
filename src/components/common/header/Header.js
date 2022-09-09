import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import "./Header.css";

const Header = () => {
    return (
        <header className="app__header">
            <section className="container">
                <HeaderTop />
                <HeaderBottom />
            </section>
        </header>
    );
}

export default Header;