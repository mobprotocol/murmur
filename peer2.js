const IPFS = require('ipfs')
const Room = require('ipfs-pubsub-room')

const ipfs = new IPFS({
  repo: 'ipfs/peer2',
  EXPERIMENTAL:  {
    pubsub: true
  },
  config: {
    Addresses: {
      Swarm: [
        '/ip4/127.0.0.1/tcp/3345'
      ]
    }
  }
})

ipfs.on('ready', () => {
  console.log('ipfs2 is ready')
  const room = Room(ipfs, 'eth_bat')

  room.on('peer joined', (peer) => {
    console.log('new peer', peer)
  })

  room.on('subscribed', () => {
    console.log('connected to pubsub room')
  })

  room.on('message', (msg) => {
    console.log('received msg', msg)
  })

  setTimeout(() => {
    console.log('made it')
    room.broadcast('hellloooo this is peer2')
  }, 10000)
})

ipfs.on('start', () => {
  ipfs.pubsub.subscribe('apples', receiveMsg)

  ipfs.pubsub.peers('apples', (err, peerIds) => {
    if (err) throw err
    console.log('peerIds', peerIds)
  })

  setTimeout(() => {
    ipfs.pubsub.publish('apples', Buffer.from('yo this peer2 '), (err) => {
      if (err) throw err
    })
  })
})

ipfs.on('error', (err) => {
  throw err
})

const receiveMsg = (msg) => {
  console.log('data', msg.data.toString('utf8'))
  console.log('seqno', msg.seqno.toString('utf8'))
}
