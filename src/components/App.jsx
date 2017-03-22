import React, { Component } from 'react';
import Voting from './Voting';
import Header from './Header';
import Nav from './Nav';
import '../App.css';

export class App extends Component {
  render() {
    const pair = ['Trainspotting', '28 Days Later'];
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Voting pair={pair}/>,
      </div>

    );
  }
}

export default App;
