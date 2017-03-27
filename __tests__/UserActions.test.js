import configureMockStore from 'redux-mock-store';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

import {login} from '../src/components/Login/UserActions';
import {LOGIN} from '../src/components/Login/UserActionTypes';

const initState = {
  loggedIn: false
};

describe('User Actions', () => {
  it('dispenses LOGIN when a login action is successful', () => {
    const store = mockStore(initState, [applyMiddleware(middlewares)]);
    console.log(store.dispatch(login()));
    return store.dispatch(login())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(LOGIN);
      });
  });
})
