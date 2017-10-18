import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ProductsList from './ProductsList'
import authKey from '../keys'
import {Sidebar, Segment, Button, Menu, Header, Container} from 'semantic-ui-react'

class MainProductsPage extends Component {
  constructor () {
    super ()
    this.state = {
      allProducts: []
    }
  }
  componentDidMount () {
    fetch(`http://svcs.ebay.com//services/search/FindingService/v1?OPERATION-NAME=findItemsIneBayStores&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=${authKey.productionKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&affiliate.networkId=9&affiliate.trackingId=5338160172&affiliate.customId=main_products&storeName=neatthingstx&outputSelector=PictureURLLarge&sortOrder=EndTimeSoonest`)
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
        <Sidebar.Pushable as={Segment} style={{display: 'hidden'}}>
          <Sidebar as={Menu} animation='uncover' width='thin' vertical inverted>
            <Menu.Item as={Link} to='/category/:apparel' name='Apparel'>Home</Menu.Item>
            <Menu.Item as={Link} to='/category/:electronics' name='Electronics'>Electronics</Menu.Item>
            <Menu.Item as={Link} to='/category/:healthandbeauty' name='Health & Beauty'> Health & Beauty'</Menu.Item>
            <Menu.Item as={Link} to='/category/:movies' name='Movies'>Movies</Menu.Item>
            <Menu.Item as={Link} to='/category/:Music' name='Music'>Music</Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
        {/* <aside className='catWrapper'>
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
        </aside> */}
        <Segment id='productsPageWrapper'>
          <Container fluid textAlign='center' id='prodHeaderImg'>
            <Header as='h2' id='imgHeader'>Cool things are Sold here!</Header>
          </Container>
        </Segment>
        <Segment id='allProductsWrapper'>
          <Container>
            <Header dividing id='allProducts'>
              ALL PRODUCTS
            </Header>
            <ProductsList allProducts={this.state.allProducts} />
          </Container>
        </Segment>
      </div>
    )
  }

}

export default MainProductsPage
