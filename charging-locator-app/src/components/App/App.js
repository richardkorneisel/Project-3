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
    this.setState({
      lat: event.target.value
    })
    console.log('lat:', this.state.lat)
  }
  
  addLon = (event) => {
    this.setState({
      lon: event.target.value
    })
    console.log('lon:', this.state.lon)
  }
  
  addDistance = (event) => {
    this.setState({
      distance: event.target.value
    })
    console.log('distance:', this.state.distance)
  }

  results = async() => {
    const baseUrl = 'https://api.openchargemap.io/v3/poi/?output=json&maxresults=100&compact=true&verbose=false'
    let latVar = '&latitude=' + this.state.lat;
    let lonVar = '&longitude=' + this.state.lon;
    let distanceVar = '&distance=' + this.state.distance;
    
    let response = await axios.get(baseUrl + latVar + lonVar + distanceVar)
        this.setState({
            results: response.data
          })
          console.log('response', response)
        
        console.log('this.state', this.state)    
      }

  render() {
    
    return (
      <div className="App">
        <Header/>
        <Search /> 
          <h2>Test Search Input</h2>
          <input type='integer' placeholder='latitude' onChange={this.addLat} />
          <br/>
          <input type='integer' placeholder='longitude' onChange={this.addLon} />
          <br/>
          <input type='integer' placeholder='distance' onChange={this.addDistance} />
          <br/>
          <button onClick={this.results}>Check that this works!</button>
        <Switch>
          <Route exact path='/' render={(routerProps) =>
            <Home addLat={this.addLat} addLon={this.addLon} addDistance={this.addDistance} results={this.results} {...this.state} {...routerProps} />
            }>
          </Route>
        </Switch>
      </div>
    );
  }
}
