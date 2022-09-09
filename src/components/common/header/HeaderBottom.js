import React from "react";
import "./HeaderBottom.css";

const HeaderBottom = () => {
    return (
        <div className="app__header-bottom">
            <nav className="app__header-bottom-navbar">
                <ul className="app__header-bottom-navbar-links">
                    {
                        ["Science", "Technology", "Sports", "Games"].map((item) => (
                            <li key={`link-${item}`}>
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default HeaderBottom;