import React, { Component } from 'react';
import Search from "../Search/Search";
import Results from "../Results/Results";
import './Home.css';

export default class Home extends Component {
    render() {
        console.log("Home pg" , this.props)
        return (
            <div className="home">
                <div><Search

                    // addLat={this.props.addLat}
                    // addLon={this.props.addLon}
                    // addDistance={this.props.addDistance}
                    getResults={this.props.getResults} 
                    getLocation={this.props.getLocation}
                    {...this.props} 
                /></div>
                <div><Results {...this.props}/></div>
            </div>
        );
    }
}

