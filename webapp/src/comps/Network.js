import React, { Component } from 'react'

export default class Network extends Component {
  render() {
    return (
      <div style={networkStyle}>
        <h3>NETWORK</h3>
      </div>
    )
  }
}

const networkStyle = {
  width: 700,
  height: 500,
  borderRadius: 5,
  backgroundColor: 'white',
  textAlign: 'center',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  margin: 20
}
