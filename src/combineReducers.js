import {combineReducers} from 'redux';
import petReducer from './reducers/petReducer';
import userReducer from './reducers/userReducer';

export default combineReducers({
  pet: petReducer,
  user: userReducer
})


//can add more here with commas ^ beneath the votingReducer
