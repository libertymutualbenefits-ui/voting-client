import {applyMiddleware, createStore, compose} from 'redux';
import {browserHistory} from 'react-router';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './combineReducers';
import {routerMiddleware} from 'react-router-redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import reduxReset from 'redux-reset';


class ReduxStore {
    store;
    persistor;
    constructor() {
        this.store = null;
        this.persistor = null;
    }
    setupStore() {
        const middleware = [thunk, logger(), routerMiddleware(browserHistory)];

        return new Promise((resolve, reject) => {
            try {
                const store = createStore(
                    reducer,
                    compose(
                        autoRehydrate(),
                        reduxReset(),
                        applyMiddleware(...middleware)
                    )
                );
                this.store = store;
                this.persistor = persistStore(
                    store,
                    {},
                    () => resolve({store: this.store, persistor: this.persistor})
                );
            }
            catch(e) {
                reject(e);
            }
        });
    }

//store.resetStore(); resets app data
    resetStore() {
        console.log("Purging");
        this.store.dispatch({type: 'RESET'});
        this.persistor.purge();
    }
}

//singleton export. Anywhere you import, you only have one instance
export let reduxStore = new ReduxStore();
