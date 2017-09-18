import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HomeProductList extends Component {
  render () {
    // console.log('products', this.props.homeProducts)
    let products = this.props.homeProducts
    let productCard = products.map((item) => {
      if(item.pictureURLLarge === undefined) {
        return (
          <div className='prodCard' key={item.itemId[0]}>
            <a href={item.viewItemURL[0]}>
              <div className='prodInfo'>
                <img className='prodImg' src={item.galleryURL} alt={item.title[0]} />
                <div className='prodName'>{item.title[0]}</div>
              </div>
            </a>
          </div>
        )
      } else {
        return (
          <div className='prodCard' key={item.itemId[0]}>
            <a href={item.viewItemURL[0]}>
              <div className='prodInfo'>
                <img className='prodImg' src={item.pictureURLLarge} alt={item.title[0]} />
                <div className='prodName'>{item.title[0]}</div>
              </div>
            </a>
          </div>
        )
      }
    })
    return (
      <div>
        <div className='prodWrapper'>
          {productCard}
          <button className='bttn shopNow-bttn'><Link to='/products'>See More Products</Link></button>
        </div>
      </div>
    )
  }

}

export default HomeProductList
