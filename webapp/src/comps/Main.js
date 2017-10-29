import React, { Component } from 'react'
import Network from './Network'

export default class Main extends Component {
  render() {
    return (
      <div style={mainStyle}>
        <Network />
      </div>
    )
  }
}

const mainStyle = {
  backgroundColor: '#F5F5F5',
  width: '100%',
  height: '100%',
  borderRadius: 5,
  display: 'flex',
  color: '#696969',
  fontFamily: 'roboto'
}
