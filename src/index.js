import React from 'react';
import ReactDOM from 'react-dom';
import getRoutes from './routes'
import './index.css';

ReactDOM.render(
  <div>{getRoutes}</div>,
  document.getElementById('root')
);
