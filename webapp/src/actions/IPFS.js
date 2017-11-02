import IPFS from 'ipfs'
import Room from 'ipfs-pubsub-room'

export default class ipfs {
  startNode() {
    return dispatch => {
      this.ipfs = new IPFS({
        repo: 'ipfs/' + Math.random(),
        EXPERIMENTAL:  {
          pubsub: true
        }
      })
      this.ipfs.on('ready', () => {
        this.ipfs.id((err, identity) => {
          if(err) throw error
          console.log('identity', identity)
          console.log('address', identity.addresses[0])
          dispatch({type: 'DEFINE_ID', val: identity.id})
          dispatch({type: 'DEFINE_PUBKEY', val: identity.publicKey})
          dispatch({type: 'DEFINE_ADDRESS', val: identity.addresses[0]})
        })
        console.log('ipfs client is ready!')
      })
    }
  }

  subscribe(topic) {
    return dispatch => {
      this.room = Room(this.ipfs, 'mob_eth')
      this.room.on('peer joined', (peer) => {
        console.log('peer', peer)
        dispatch({type: 'ADD_PEER', val: peer})
      })

      this.room.on('subscribed', () => {
        console.log('connected to pub sub')
      })

      this.room.on('message', (msg) => {
        console.log('recieived msg')
      })
    }
  }
}
