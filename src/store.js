import {applyMiddleware, createStore, compose} from 'redux';
import {browserHistory} from 'react-router';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './combineReducers';
import { routerMiddleware } from 'react-router-redux';
//import {persistStore, autoRehydrate} from 'redux-persist';

const middleware = applyMiddleware(thunk, logger(), routerMiddleware(browserHistory));
const store = createStore(reducer, compose(middleware)); //autoRehydrate() from redux-persist

//persistStore(store);

export default store;
