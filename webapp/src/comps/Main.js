import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import MainNested from './MainNested'

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNested />
      </Provider>
    )
  }
}
