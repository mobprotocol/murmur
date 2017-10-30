import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideNav from './SideNav/SideNav'
import Network from './Network'

class MainNested extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div style={mainStyle}>
        <SideNav />
        <Network />
      </div>
    )
  }
}

const storeToProps = store => store

export default connect(storeToProps)(MainNested)

const mainStyle = {
  backgroundColor: '#F5F5F5',
  width: '100%',
  height: '100%',
  borderRadius: 5,
  display: 'flex',
  color: '#696969',
  fontFamily: 'roboto'
}
