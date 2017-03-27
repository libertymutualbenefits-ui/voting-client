import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import {reduxStore} from './store';

import Home from './components/Home'
import PetList from './components/PetList/PetList';

export default function getRoutes(store){
  const requireAuth = (nextState, replace) => {
    const state = reduxStore.store.getState();

    if(!state.user.loggedIn) {
      replace({
        pathname: '/'
      })
    }
  };

  const logout = (nextState, replace) => {
    reduxStore.resetStore();
    replace({
      pathname: '/'
    })
  }

  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/petList" component={PetList} onEnter={requireAuth}/>
      <Route path="/logout" onEnter={logout}/>
    </Router>
  );
}
