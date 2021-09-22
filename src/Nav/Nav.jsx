import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return (
        <div className="parent">
            <div className="child1">
            <Link to='/'>
                <li>HOME</li>
            </Link>
            <li>BLOG</li>
            <li>CONTACTS</li>
            <li>ABOUT US</li></div>
            <div className="child2">
                <button>LOGIN</button>
                <button>REGISTRATION</button>
            </div>
        </div>
    )
}

export default Nav;