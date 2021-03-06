import React, { Component } from 'react'
import { IPFS } from '../actions/index'
import { connect } from 'react-redux'

class Network extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(IPFS.startNode())
  }

  render() {
    const { id, address } = this.props
    return (
      <div style={networkStyle}>
        <h3>ID {id}</h3>
      </div>
    )
  }
}

const storeToProps = store => store.ipfs

export default connect(storeToProps)(Network)

const networkStyle = {
  width: 700,
  height: 500,
  borderRadius: 5,
  backgroundColor: 'white',
  textAlign: 'center',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  margin: 20
}
