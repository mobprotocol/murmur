const IPFS = require('ipfs')
const Room = require('ipfs-pubsub-room')

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
  const room = Room(ipfs, 'eth_bat')
  room.on('peer joined', (peer) => {
    console.log('Peer joined room', peer)
  })

  room.on('subscribed', () => {
    console.log('connected to pubsub room')
  })

  room.on('message', (msg) => {
    console.log('received msg', msg)
  })
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
