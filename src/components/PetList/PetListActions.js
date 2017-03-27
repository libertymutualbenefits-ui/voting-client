import {ADD_PET, SAVE_PET} from './PetListActionTypes';

export function addPet(payload){
  return (dispatch) => {
    dispatch({
      type: ADD_PET,
      payload: payload
    });
  }
}

export function savePet(payload){
  return (dispatch) => {
    dispatch({
      type: SAVE_PET
    });
  }
}
