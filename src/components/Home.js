import React, { Component } from 'react'
import HomeProductList from './HomeProductList'

class Home extends Component {

  render () {
    return (
      <div>
        <div className='homeHeader'>
          <div>All The Neat Products You Could Ever Want</div>
          <img src='https://cdn.shopify.com/s/files/1/1790/3573/products/DSC_3656-small_1666x.jpg?v=1492893038' alt='' />
          <button className='bttn shopNow-bttn'>Shop Now</button>
        </div>
        <div>
          <HomeProductList />
        </div>
      </div>
    )
  }

}

export default Home
