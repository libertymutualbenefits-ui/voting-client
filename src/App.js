import React, { Component } from 'react';
import logo from './logo.svg';
import Voting from './components/Voting';
import './App.css';

class App extends Component {
  render() {
    const pair = ['Trainspotting', '28 Days Later'];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Voting pair={pair} hasVoted="Trainspotting"/>,
      </div>

    );
  }
}

export default App;
