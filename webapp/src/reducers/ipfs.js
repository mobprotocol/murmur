const initialState = {
  peers: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PEER':
      return {
        ...state,
        peer.push(action.val)
      }
    default:
      return state
  }
}
