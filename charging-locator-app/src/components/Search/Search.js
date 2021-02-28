import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render() {
        console.log('search this.props:', this.props)
        return (
            <div>
                <h2>Test Search Input</h2>
                <input type='integer' placeholder='latitude' onChange={this.props.addLat} />
                <br />
                <input type='integer' placeholder='longitude' onChange={this.props.addLon} />
                <br />
                <input type='integer' placeholder='distance' onChange={this.props.addDistance} />
                <br />
                <button onClick={this.props.getResults}>Check that this works!</button>
            </div>
        );
    }
}

