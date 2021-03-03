import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
        <div className='nav'>
            <Link to='aboutus'>About Us</Link>
        </div>
    );
}
export default Nav;