import {LOGIN} from '../components/Login/UserActionTypes';


const initState = {
  loggedIn: false
};

export default function userReducer(state=initState, action){
  switch(action.type){
    case LOGIN: {
      console.log('LOGIN case action was called');
      return state = {
        ...state,
        loggedIn: true
      };
    }
    default: {
      return state;
    }
  }
};
