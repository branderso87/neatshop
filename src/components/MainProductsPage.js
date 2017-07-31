import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ProductsList from './ProductsList'

class MainProductsPage extends Component {
  constructor () {
    super ()
    this.state = {
      allProducts: []
    }
  }
  componentDidMount () {
    fetch('/services/search/FindingService/v1?OPERATION-NAME=findItemsIneBayStores&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=BrandiAn-NeatShop-PRD-7c6cc25dc-cc3d11e7&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&affiliate.networkId=9&affiliate.trackingId=5338160172&affiliate.customId=home_products&storeName=neatthingstx&outputSelector=StoreInfo&sortOrder=EndTimeSoonest')
    .then(res2 => res2.json())
    .then(data2 => {
      const allItems = data2.findItemsIneBayStoresResponse[0].searchResult[0].item
      this.setState({
        allProducts: allItems
        })
      })
  }
  render () {
    return (
      <div className=''>
        <aside className='catWrapper'>
          <div>Categories</div>
          <ul className='catLinks'>
            <li><Link to=''>Apparel</Link></li>
            <li><Link to=''>Electronics</Link></li>
            <li><Link to=''>Health & Beauty</Link></li>
            <li><Link to=''>Movies</Link></li>
            <li><Link to=''>Music</Link></li>
            <li><Link to=''>Sporting Goods</Link></li>
            <li><Link to=''>Toys</Link></li>
            <li><Link to=''>Video Games</Link></li>
          </ul>
        </aside>
        <div className='productWrapper'>
          <div>
            <img src='https://cdn.shopify.com/s/files/1/1790/3573/products/DSC_3619-small_1666x.jpg?v=1492725457' alt='' />
          </div>
            <ProductsList allProducts={this.state.allProducts} />
        </div>
      </div>
    )
  }

}

export default MainProductsPage
