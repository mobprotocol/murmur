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
    case 'DEFINE_PUBKEY':
      return {
        ...state,
        pubKey: action.val
      }
    case 'DEFINE_ADDRESS':
      return {
        ...state,
        address: action.val
      }
    default:
      return state
  }
}
