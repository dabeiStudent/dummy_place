import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Navlinks.css"
const NavLinks = () => {
    const signoutHandler = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/user/user-logout', '', { withCredentials: true })
            .then(res => {
                alert(res.data.msg)
            }).catch(err => {
                alert('Something went wrong');
            });
    }
    return (
        <ul className="main-header-link">
            <li>
                <NavLink end to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/create-new-place" >ADD-NEW-PLACE</NavLink>
            </li>
            <li>
                <NavLink to="/chat-here">CHAT-WITH-ME</NavLink>
            </li>
            <li>
                <NavLink to="/user/user-login">SIGN-IN</NavLink>
            </li>
            <li>
                <NavLink to="/user/user-logout" onClick={signoutHandler}>LOG-OUT</NavLink>
            </li>
        </ul>
    )
};

export default NavLinks;