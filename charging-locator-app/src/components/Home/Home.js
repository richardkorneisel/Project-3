import React, { Component } from 'react';
import Search from "../Search/Search";
import Results from "../Results/Results";


export default class Home extends Component {
    render() {

        return (
            <div className="home">
                <div><Search
                    addLat={this.props.addLat}
                    addLon={this.props.addLon}
                    addDistance={this.props.addDistance}
                    getResults={this.props.getResults} {...this.props} 
                /></div>
                <div><Results /></div>
            </div>
        );
    }
}

