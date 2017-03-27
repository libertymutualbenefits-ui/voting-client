import {LOGIN} from './UserActionTypes';

export function login(payload){
  return (dispatch) => {
    dispatch({
      type: LOGIN
    });
  }
}
