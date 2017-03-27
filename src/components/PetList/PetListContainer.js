//connection to the store to map things in the store to the state of the component
import {connect} from 'react-redux';
import {addPet, savePet} from './PetListActions';

const mapStateToProps = (state) => {
  return {
    pet: state.pet
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    savePet: (payload) => {
      dispatch(savePet(payload));
    },
    handleChange: (payload) => {
      dispatch(addPet(payload));
    }
  }
};

export default function mount(PetList){
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(PetList);
}
