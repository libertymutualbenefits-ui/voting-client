import {combineReducers} from 'redux';
import petReducer from './reducers/petReducer';

export default combineReducers({
  pet: petReducer
})


//can add more here with commas ^ beneath the votingReducer
