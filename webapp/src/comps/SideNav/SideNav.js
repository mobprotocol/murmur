import React, { Component } from 'react'

export default class SideNav extends Component {
  render() {
    return (
      <div style={sideNavStyle}>

      </div>
    )
  }
}

const sideNavStyle = {
  width: 200,
  height: '90%',
  backgroundColor: 'white',
  borderRadius: 5,
  margin: 20,
  textAlign: 'center',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}
