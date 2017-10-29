import IPFS from 'ipfs'

export default class ipfs {
  constructor() {
    this.setup()
  }

  setup() {
    this.ipfs = new IPFS({
      repo: 'ipfs/' + Math.random()
      EXPERIMENTAL:  {
        pubsub: true
      }
    })

    ipfs.on('ready', () => {
      console.log('ipfs client is ready!')
    })
  }
}
