//connection to the store to map things in the store to the state of the component
import {connect} from 'react-redux';
import {login} from './UserActions';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(login());
    }
  }
};

export default function mount(user){
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(user);
}
