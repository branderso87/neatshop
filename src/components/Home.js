import React, { Component } from 'react'
import HomeProductList from './HomeProductList'

class Home extends Component {

  render () {
    return (
      <div>
        <div className='homeHeader'>
          <div>All The Neat Products You Could Ever Want</div>
          <img src='' alt='' />
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
