import React, { Component } from 'react';
import './AboutUs.css';

function AboutUs() {
    return (

        <div className="aboutUs">
            <p>Hello!</p>
            <p>This app was designed by three individuals who wanted to give electric car drivers a useful tool to locate charging stations.</p>
            <p>As we all know, electric vehicles are our future.  Being able to quickly find convient charging stations is a great incentive to help drivers make the decision to make the change.</p>
            <p> For those of us that have made the change, you will be plesantly suprised to find stations not only being put in closer to your home but along the routes to your favorite destinations.</p>
            <p>You have two options to find charging stations near you:</p>
            <p>1)  The first option is to input a city and state.  The number of miles is optional if you want a tighter radius to your location.</p>
            <p>2)  The second option for those outside a major city is to unput your latitude and longitude.  Again number of miles is optional.  As an example: Chicago, IL has a latitude of 41.8756 and a longitude of -87.6244</p>
        </div>

    )
}

export default AboutUs;