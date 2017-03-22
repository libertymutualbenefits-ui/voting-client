import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import App from './components/App'
import Voting from './components/Voting';

// can use onEnter=functionName (could use for authentication)

export default function getRoutes(){
  return <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/voting" component={Voting}/>
  </Router>
}
