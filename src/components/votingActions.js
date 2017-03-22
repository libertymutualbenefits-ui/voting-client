export function voted(payload){
  return (dispatch)=>{
    dispatch({
      type: "BUTTON_CLICKED",
      payload: payload
    })
  }
}
