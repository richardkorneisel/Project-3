import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render() {
        console.log('search this.props:', this.props)
        return (
            <div className='container'>
                <h2>Station Search</h2>

                <h5>Search by City and State</h5>
                <div className='searchContainer'>


                    <div className='city'>
                        <p>Enter City</p>
                        <input type='text' placeholder='city' onChange={this.props.addCity} />
                    </div>

                    <div className='state'>
                        <p>Enter State</p>
                        <input type='text' placeholder='state' onChange={this.props.addState} />
                    </div>

                    <div className='dist'>
                        <p>Enter distance</p>
                        <input type='integer' placeholder='distance' onChange={this.props.addDistance} />
                    </div>

                </div>

                <div className='button'>
                        <button onClick={this.props.getLocation}>Get Coordinates</button>
                </div>
                    
                <h2 className="or">OR</h2>
                <h5>Search by latitiude and longitude</h5>

                <div className="searchContainer">
                    <div className='lat'>
                        <p>Enter latitude</p>
                        <input type='integer' placeholder='latitude' onChange={this.props.addLat} />
                    </div>
                    <div className='lon'>
                        <p>Enter longitude</p>
                        <input type='integer' placeholder='longitude' onChange={this.props.addLon} />
                    </div>
                    <div className='dist'>
                        <p>Enter dististance</p>
                        <input type='integer' placeholder='distance' onChange={this.props.addDistance} />
                    </div>
                </div>
                <div className='button'>
                    <button onClick={this.props.getResults}>Submit Request</button>
                </div>

            </div>
        );
    }
}

