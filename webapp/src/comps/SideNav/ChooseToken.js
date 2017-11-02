import React, { Component } from 'react'

export default class ChooseToken extends Component {
  render() {
    return (
      <div style={chooseTokenStyle}>
        <div style={tileStyle}>
          <h3>Buy</h3>
          <img src='./src/imgs/mob_logo.png' />
        </div>
        <div style={tileStyle}>
          <h3>Sell</h3>
          <img src='./src/imgs/ethereum_logo.png' />
        </div>
      </div>
    )
  }
}

const chooseTokenStyle = {
  display: 'flex',
  textAlign: 'center',
  height: 150
}

const tileStyle = {
  width: '50%',
  height: 100,
}


const tabsStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row'
}
