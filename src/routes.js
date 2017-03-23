import React from 'react';
import {Route, Router, browserHistory} from 'react-router';

import Home from './components/Home'
import PetList from './components/PetList/PetList';

// can use onEnter=functionName (could use for authentication)

export default function getRoutes(store){
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/petList" component={PetList}/>
    </Router>
  );
}
