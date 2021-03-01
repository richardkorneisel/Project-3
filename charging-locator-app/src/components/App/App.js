import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'


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
    // console.log('lat:', this.state.lat)
  }
  
  addLon = (event) => {
    this.setState({
      lon: event.target.value
    })
    // console.log('lon:', this.state.lon)
  }
  
  addDistance = (event) => {
    this.setState({
      distance: event.target.value
    })
    // console.log('distance:', this.state.distance)
  }

  getResults = async() => {
    const baseUrl = 'https://api.openchargemap.io/v3/poi/?output=json&maxresults=10&compact=true&verbose=false'
    let latVar = '&latitude=' + this.state.lat;
    let lonVar = '&longitude=' + this.state.lon;
    let distanceVar = '&distance=' + this.state.distance;
    
    let response = await axios.get(baseUrl + latVar + lonVar + distanceVar)
    
    this.setState({
        results: response.data
      })
  }

  render() {
    
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={(routerProps) =>
            <Home
              addLat={this.addLat}
              addLon={this.addLon}
              addDistance={this.addDistance}
              getResults={this.getResults} {...this.state} {...routerProps} />
          }>
          </Route>
          <Route path="/:id" component={AboutUs} />

        </Switch>
      </div>
    );
  }
}
