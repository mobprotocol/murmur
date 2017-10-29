import IPFS from 'ipfs'

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
          dispatch({type: 'DEFINE_ID', val: identity.id})
        })
        console.log('ipfs client is ready!')
      })
    }
  }
}
