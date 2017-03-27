import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';

import getRoutes from './routes'
import Header from './components/Header';
import Nav from './components/Nav';

import './index.css';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <div>
        {getRoutes(store)}
      </div>
  </div>
  </Provider>,
  document.getElementById('root')
);
