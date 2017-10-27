const IPFS = require('ipfs')

const ipfs = new IPFS({
  repo: 'ipfs/peer1',
  EXPERIMENTAL:  {
    pubsub: true
  },
  config: {
    Addresses: {
      Swarm: [
        '/ip4/127.0.0.1/tcp/3344'
      ]
    }
  }
})

ipfs.on('ready', () => {
  console.log('ipfs1 is ready')
})

ipfs.on('start', () => {
  console.log('ipfs is ready')
  ipfs.pubsub.subscribe('apples', receiveMsg)

  ipfs.pubsub.peers('apples', (err, peerIds) => {
    if (err) throw err
    console.log('peerIds', peerIds)
  })
})

ipfs.on('error', (err) => {
  throw err
})

const receiveMsg = (msg) => {
  console.log('peer1 received msg', msg.data.toString('utf8'))
}
