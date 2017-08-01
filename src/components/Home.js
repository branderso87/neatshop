import React, { Component } from 'react'
import HomeProductList from './HomeProductList'
import authKey from '../keys'
console.log('authkey', authKey.productionKey)
class Home extends Component {
  constructor () {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount () {
    fetch(`/services/search/FindingService/v1?OPERATION-NAME=findItemsIneBayStores&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=${authKey.productionKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&affiliate.networkId=9&affiliate.trackingId=5338160172&affiliate.customId=home_products&storeName=neatthingstx&outputSelector=StoreInfo&paginationInput.entriesPerPage=6&sortOrder=EndTimeSoonest`)
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
          <div className='fullwidth-img'>
            <div className='tagLine'>
              <div className='tlineHead'>Neat Things</div>
              <div className='tlineSub'>Added Daily</div>
            </div>
            <button className='bttn shopNow-bttn'>Shop Now</button>
          </div>
        </div>
          <HomeProductList homeProducts={this.state.products} />
      </div>
    )
  }

}

export default Home
