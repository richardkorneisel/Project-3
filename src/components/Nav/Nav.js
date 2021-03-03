import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Nav.css';

function Nav() {
    return (

        <div className='nav'>
            <p><b><a href="AboutUs">About Us</a></b></p>
        </div>
    );
}
export default Nav;