import React, { Component } from 'react'
import HomeProductList from './HomeProductList'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount () {
    fetch('/services/search/FindingService/v1?OPERATION-NAME=findItemsIneBayStores&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=BrandiAn-NeatShop-PRD-7c6cc25dc-cc3d11e7&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&affiliate.networkId=9&affiliate.trackingId=5338160172&affiliate.customId=home_products&storeName=neatthingstx&outputSelector=StoreInfo&paginationInput.entriesPerPage=6&sortOrder=EndTimeSoonest')
    .then(res => res.json())
    .then(data => {
      const items = data.findItemsIneBayStoresResponse[0].searchResult[0].item
      this.setState({
        products: items
        })
      }
    )

  }
  render () {
    return (
      <div>
        <div className='homeHeader'>
          <div>All The Neat Products You Could Ever Want</div>
          <img className='fullwidth-img' src='https://cdn.shopify.com/s/files/1/1790/3573/products/DSC_3656-small_1666x.jpg?v=1492893038' alt='' />
          <button className='bttn shopNow-bttn'>Shop Now</button>
        </div>
        <div>
          <HomeProductList homeProducts={this.state.products} />
          <button>See More Products</button>
        </div>
      </div>
    )
  }

}

export default Home
