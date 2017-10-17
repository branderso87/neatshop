import React, { Component } from 'react'
import HomeProductList from './HomeProductList'
import authKey from '../keys'
import {Link} from 'react-router-dom'
import {Container, Segment, Grid, Header, Button, Image} from 'semantic-ui-react'

// console.log('authkey', authKey.productionKey)
class Home extends Component {
  constructor () {
    super()
    this.state = {
      products: []
    }
  }
  componentDidMount () {
    fetch(`/services/search/FindingService/v1?OPERATION-NAME=findItemsIneBayStores&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=${authKey.productionKey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&affiliate.networkId=9&affiliate.trackingId=5338160172&affiliate.customId=home_products&storeName=neatthingstx&outputSelector=PictureURLLarge&paginationInput.entriesPerPage=6&sortOrder=EndTimeSoonest`)
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
        <Segment>
          <Container fluid textAlign='center' className='homeHeader'>
            <Header as='h2' className='imgHeader'>Neat Things Added Daily</Header>
            <Button large as={Link} to='/products'>SHOP NOW</Button>
          </Container>
        </Segment>
        <Container className='bannerAd' id='fullwidth-banner'>
          <Header as='h4' id='whiteHeader'>Fall Sale. Take 20% off Specially Marked Items</Header>
        </Container>
        <Segment>
          <Container>
            <Header dividing>
              PRODUCTS LEAVING SOON
            </Header>
            <HomeProductList homeProducts={this.state.products} />
            <Button fluid as={Link} to='/products'>SEE MORE</Button>
          </Container>
        </Segment>
        <Segment style={{display:'none'}}>
          <Container>
            <Header dividing>
              THIS JUST IN
            </Header>
            <HomeProductList homeProducts={this.state.products} />
            <Button fluid as={Link} to='/products'>SEE MORE</Button>
          </Container>
        </Segment>
      </div>
    )
  }

}

export default Home
