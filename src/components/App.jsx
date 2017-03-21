import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Voting from './Voting';
import Header from './Header';
import Nav from './Nav';
import '../App.css';

// const routes = <Route component={App}>
//   <Route path="/" component={Voting} />
// </Route>;

class App extends Component {
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

// ReactDOM.render(
//   <Router history={hashHistory}>{routes}</Router>,
//   document.getElementById('app')
// );
