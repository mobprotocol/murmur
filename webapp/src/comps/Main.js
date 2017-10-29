import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Network from './Network'

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={mainStyle}>
          <Network />
        </div>
      </Provider>
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
