import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Grid, Container, Card, Image} from 'semantic-ui-react'

class HomeProductList extends Component {
  render () {
    // console.log('products', this.props.homeProducts)
    let products = this.props.homeProducts
    let productCard = products.map((item) => {
      if(item.pictureURLLarge === undefined) {
        return (
          <div key={item.itemId[0]}>
            <Card as='a' href={item.viewItemURL[0]}>
              <Image src={item.galleryURL} alt={item.title[0]} />
              <Card.Content>
                <Card.Header>{item.title[0]}</Card.Header>
              </Card.Content>
            </Card>
          </div>
        )
      } else {
        return (
          <div key={item.itemId[0]}>
            <Card as='a' href={item.viewItemURL[0]}>
              <Image src={item.pictureURLLarge} alt={item.title[0]} />
              <Card.Content>
                <Card.Header>{item.title[0]}</Card.Header>
              </Card.Content>
            </Card>
          </div>
        )
      }
    })
    return (
      <div>
        <Grid columns='equal'>
          <Grid.Row column='4'>
            {productCard}
          </Grid.Row>
        </Grid>
      </div>
    )
  }

}

export default HomeProductList
