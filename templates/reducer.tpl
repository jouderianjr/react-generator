import {} from '';

const initialState = {

}

export default ( state = initialState, action ) => {
  switch(action.type) {
    case 'Dummy':
      return {...state};
    default:
      return initialState;
  }
}