import React, { Component } from 'react'
import HomeProductList from './HomeProductList'
import authKey from '../keys.js'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      products: {}
    }
  }
  componentDidMount () {
    fetch ('')
    .then(res => res.json())
    .then(data => this.setState({
      products: data
      }
    ))
  }
  render () {
    console.log(authKey.productionKey)
    return (
      <div>
        <div className='homeHeader'>
          <div>All The Neat Products You Could Ever Want</div>
          <img src='https://cdn.shopify.com/s/files/1/1790/3573/products/DSC_3656-small_1666x.jpg?v=1492893038' alt='' />
          <button className='bttn shopNow-bttn'>Shop Now</button>
        </div>
        <div>
          <HomeProductList homeProducts={this.state.products}/>
          <button>See More Products</button>
        </div>
      </div>
    )
  }

}

export default Home
