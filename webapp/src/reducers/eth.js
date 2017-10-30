const initialState = { }


export default function(state = initialState, action) {
  switch(action.type) {
    case 'DEFINE_ADDRESS':
      return {
        ...state,
        address: action.val
      }
    default:
      return state
  }
}
