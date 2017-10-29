const initialState = {
  peers: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PEER':
      return {
        ...state,
        peers: peers.push(action.val)
      }
    case 'DEFINE_ID':
      return {
        ...state,
        id: action.val
      }
    default:
      return state
  }
}
