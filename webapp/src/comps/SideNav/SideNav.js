import React, { Component } from 'react'
import ChooseToken from './ChooseToken'
import { IPFS } from '../../actions/index'
import { connect } from 'react-redux'

class SideNav extends Component {
  constructor() {
    super()
    this.handleSubscribe = this.handleSubscribe.bind(this)
  }

  handleSubscribe() {
    const { dispatch } = this.props
    dispatch(IPFS.subscribe())
  }

  render() {
    return (
      <div style={sideNavStyle}>
        <ChooseToken />
        <div style={buttonStyle} onClick={() => this.handleSubscribe()}>
          <h3>Subscribe</h3>
        </div>
      </div>
    )
  }
}

const storeToProps = store => store.ipfs

export default connect(storeToProps)(SideNav)

const sideNavStyle = {
  width: 200,
  height: '90%',
  backgroundColor: 'white',
  borderRadius: 5,
  margin: 20,
  textAlign: 'center',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

const buttonStyle = {
  width: '90%',
  height: 40,
  backgroundColor: '#98FB98',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  borderRadius: 5
}
