import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header'
import Search from '../Search/Search'
import Results from '../Results/Results'

function App() {
  return (
    <div className="App">
      <Header/>
        <h2>This app does everything!</h2>
      <Search/>
      <Results/>

    </div>
  );
}

export default App;
