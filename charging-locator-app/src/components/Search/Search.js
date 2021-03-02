import React, { Component } from 'react';
import './Search.css';
import Button from 'react-bootstrap/Button';

import Button from 'react-bootstrap/Button'


export default class Search extends Component {
    render() {
        console.log('search this.props:', this.props)
        return (
            <div className='Search'>
                <h2>Station Search</h2>

                <div className="searchWindow">
                    <h5>Search by City and State</h5>
                    <div className='searchContainer'>


                        <div className='searchTitle'>
                            <p>Enter City</p>
                            <input type='text' placeholder="Chicago" onChange={this.props.addCity} />
                        </div>

                        <div className='searchTitle'>
                            <p>Enter State</p>
                            <input type='text' placeholder="Illinois" onChange={this.props.addState} />
                        </div>

                        <div className='searchTitle'>
                            <p>Enter distance</p>
                            <input type='integer' placeholder="25" onChange={this.props.addDistance} />
                        </div>
                        <br/>

                    </div>
                    <div className='button'>
                        <Button variant="secondary" onClick={this.props.getLocation}>Search</Button>{' '}
                    </div>
                </div>
                <h2 className="or">OR</h2>
                <div className="searchWindow">

                    <h5>Search by latitiude and longitude</h5>

                    <div className="searchContainer">
                        <div className='searchTitle'>
                            <p>Enter latitude</p>
                            <input type='integer' placeholder={this.props.lat} onChange={this.props.addLat} />
                        </div>
                        <div className='searchTitle'>
                            <p>Enter longitude</p>
                            <input type='integer' placeholder={this.props.lon} onChange={this.props.addLon} />
                        </div>
                        <div className='searchTitle'>
                            <p>Enter distance</p>
                            <input type='integer' placeholder={this.props.distance} onChange={this.props.addDistance} />
                        </div>
                    </div>
                    <div className='button'>
                        <Button variant="secondary" onClick={this.props.getResults}>Search</Button>{' '}
                    </div>
                </div>
            </div>
        );
    }
}

