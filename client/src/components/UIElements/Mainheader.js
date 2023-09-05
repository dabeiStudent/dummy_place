import React from "react";

import './Mainheader.css'
import NavLinks from "./Navlinks";
import { NavLink } from "react-router-dom";
const Mainheader = () => {
    return (
        <header className="main-header">
            <h1 className="main-header_logo">
                <NavLink end to='/' >AT-WHERE</NavLink>
            </h1>
            <nav className="navigation-links">
                <NavLinks />
            </nav>
        </header>
    )
};

export default Mainheader;