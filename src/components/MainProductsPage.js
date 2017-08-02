import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ProductsList from './ProductsList'
import authKey from '../keys'

class MainProductsPage extends Component {
  constructor () {
    super ()
    this.state = {
      allProducts: []
    }
  }
  componentDidMount () {
    fetch(`/services/search/FindingService/v1?OPERATION-NAME=findItemsIneBayStores&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=${authKey.productionKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&affiliate.networkId=9&affiliate.trackingId=5338160172&affiliate.customId=main_products&storeName=neatthingstx&outputSelector=PictureURLLarge&sortOrder=EndTimeSoonest`)
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
      <div className='productsPageWrapper'>
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
        <div className='allProductsWrapper'>
          <div className='fullwidth-img prodHeaderImg'>
            <div>Cool things are sold here!</div>
          </div>
            <ProductsList allProducts={this.state.allProducts} />
        </div>
      </div>
    )
  }

}

export default MainProductsPage
