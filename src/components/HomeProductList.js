import React, { Component } from 'react'

class HomeProductList extends Component {
// items = homeProducts.findItemsIneBayStoresResponse[0].searchResult[0].item
// img = items.galleryurl[0]
// name = items.title[0]
// affLink = items.viewItemURL
  render () {
    console.log('products', products)
    let products = this.props.homeProducts
    return (
      <div>
        <div className='prodWrapper'>
          <a href = ''>
            <div className='prodCard'>
              <img src='' alt=''/>
              <div className='prodName'></div>
            </div>
          </a>
        </div>
      </div>

    )
  }

}

export default HomeProductList
