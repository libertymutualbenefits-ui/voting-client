import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {reduxStore} from './store';

import getRoutes from './routes'
import Header from './components/Header';
import Nav from './components/Nav';

import './index.css';
import './App.css';

async function init() {
  const store = await reduxStore.setupStore();
  ReactDOM.render(
    <Provider store={store.store}>
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
}

init();
