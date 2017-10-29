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
        console.log('ipfs client is ready!')
      })
    }
  }
}
