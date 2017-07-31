import React, { Component } from 'react'

class HomeProductList extends Component {
// items = homeProducts.findItemsIneBayStoresResponse[0].searchResult[0].item
// img = items.galleryurl[0]
// name = items.title[0]
// affLink = items.viewItemURL
  render () {
    console.log('products', this.props.homeProducts)
    // let items = products.map(())
    let products = this.props.homeProducts
    // let productList = products.map(() => {
    // })
    let productCard = products.map((item) => {
      return (
        <div  className='prodCard'>
          <a href = {item.viewItemURL[0]}>
            <div clasName='prodInfo-mini'>
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
