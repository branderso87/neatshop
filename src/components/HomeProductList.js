import React, { Component } from 'react'

class HomeProductList extends Component {
  render () {
    console.log('products', this.props.homeProducts)
    let products = this.props.homeProducts
    let productCard = products.map((item) => {
      return (
        <div className='prodCard' key={item.itemId[0]}>
          <a href={item.viewItemURL[0]}>
            <div className='prodInfo-mini'>
              <img src={item.galleryURL} alt={item.title[0]} />
              <div className='prodName'>{item.title[0]}</div>
            </div>
          </a>
        </div>
      )
    })
    return (
      <div>
        <div className='prodWrapper'>
          {productCard}
        </div>
      </div>
    )
  }

}

export default HomeProductList
