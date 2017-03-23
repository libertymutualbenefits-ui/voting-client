import {ADD_PET, SAVE_PET} from '../components/PetList/PetListActionTypes';


const initState = {
  petInput: null,
  pets: ["doggo"]
};

export default function petReducer(state=initState, action){
  switch(action.type){
    case ADD_PET: {
      return state = {
        ...state,
        petInput: action.payload
      };
    }
    case SAVE_PET: {
      return state = {
        ...state,
        pets: state.pets.concat([state.petInput.value])
      }
    }
    default: {
      return state;
    }
  }
};
