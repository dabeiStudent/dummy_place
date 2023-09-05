import React from "react";

import { NavLink } from "react-router-dom";

import "./Navlinks.css"
const NavLinks = () => {
    return (
        <ul className="main-header-link">
            <li>
                <NavLink end to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/create-new-place" >ADD NEW PLACE</NavLink>
            </li>
        </ul>
    )
};

export default NavLinks;