import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header'
import Search from '../Search/Search'
import Results from '../Results/Results'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      distance: 25,
      lat: 41.8,
      lon: -87.6,
      fullUrl: "",
      results: []
    }
  }

  addLat = (event) => {
    this.state({
      lat: event.target.value
    })
    console.log('lat:',)
  }
  
  addLon = (event) => {
    this.state({
      lon: event.target.value
    })
    console.log('lon:',)
  }
  
  addDistance = (event) => {
    this.state({
      distance: event.target.value
    })
    console.log('distance:',)
  }

  results = async() => {
    const baseUrl = 'https://api.openchargemap.io/v3/poi/?output=json&maxresults=10&compact=true&verbose=false'
    let latVar = '&latitude=' + this.state.lat;
    let lonVar = '&longitude=' + this.state.lon;
    let distanceVar = '&distance=' + this.state.distance;
    
    let response = await axios.get(baseUrl + latVar + lonVar + distanceVar)
        this.setState({
            results: response.data
          })
          console.log('response', response)
        
        console.log('this.state.results', this.state.results)    
      }

  render() {
    
    return (
      <div className="App">
        <Header/>
        <Search /> 
          <h2>Test Search Input</h2>
          <input type='float' placeholder='latitude' onChange={this.addLat} />
          <br/>
          <input type='float' placeholder='longitude' onChange={this.addLon} />
          <br/>
          <input type='float' placeholder='distance' onChange={this.addDistance} />
          <br/>
          <button onClick={this.results}>Check that this works!</button>

        <Results/>

        {/* <p>{this.results(41.8756,-87.6244,10)}</p> */}

      </div>
    );
  }
}
