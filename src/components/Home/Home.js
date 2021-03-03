import React, { Component } from 'react';
import Search from "../Search/Search";
import Results from "../Results/Results";
import './Home.css';

export default class Home extends Component {

    render() {
        return (
            <div className="home">
                <div><Search
                    getResults={this.props.getResults} {...this.props}
                    getLocation={this.props.getLocation} {...this.props}
                /></div>
                <div><Results {...this.props}/></div>
            </div>
        );
    }
}

