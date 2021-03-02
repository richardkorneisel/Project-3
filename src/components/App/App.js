import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'
import Detail from '../Detail/Detail'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      distance: 25,
      lat: 41.8,
      lon: -87.6,
      fullUrl: "",
      results: [],
      city: "Chicago",
      state: "IL"
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

  addCity = (event) => {
    this.setState({
      city: event.target.value
    })
    //  console.log('city:', this.state.city)
  }

  addState = (event) => {
    this.setState({
      state: event.target.value
    })
    //  console.log('state:', this.state.state)
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
  
  getLocation = async() => {
    const baseUrl = 'http://open.mapquestapi.com/geocoding/v1/address?'
    let keyVar = '&key=MzIQ3bSXuoSwGCLjXzaUVXn4e5lJMUSI';
    let locationVar = '&location=' + this.state.city + "," + this.state.state;
        
    let response = await axios.get(baseUrl + keyVar + locationVar)
    // console.log('Location response', response)

    this.setState({
      lat: response.data.results[0].locations[0].latLng.lat,
      lon: response.data.results[0].locations[0].latLng.lng
      })

    this.getResults();
  }



  render() {
    
    return (
      <div className="app">
        <div className="header">
        <Header />
        </div>
        <Switch>
          <Route exact path='/' render={(routerProps) =>
            <Home
              addLat={this.addLat}
              addLon={this.addLon}
              addDistance={this.addDistance}
              getResults={this.getResults} {...this.state} {...routerProps}
              addCity={this.addCity}
              addState={this.addState}
              getLocation={this.getLocation}
              />
          }>
          </Route>
          <Route path="/aboutus" component={AboutUs} />
          <Route path='/detail/:id' render={routerProps => 
            <Detail {...routerProps} results={this.state.results} /> 
          } />
        </Switch>

      </div>
    );
  }
}
