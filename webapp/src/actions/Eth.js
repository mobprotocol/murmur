import Ethjs from 'ethjs'

export default class ETH {
  setup() {
    this.eth = new Ethjs(new Ethjs.HttpProvider('http://localhost:8545'))
    
  }
}
