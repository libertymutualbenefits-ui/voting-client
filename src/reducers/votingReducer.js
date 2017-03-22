

export default function votingReducer(state, action){
  switch(action.type){
    case 'BUTTON_CLICKED': {
      return state = {
        ...state,
        voteChoice: action.payload
      }
    }
    case default: {
      return state;
    }
  }
}
