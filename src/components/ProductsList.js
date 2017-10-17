import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Grid, Container, Card, Image} from 'semantic-ui-react'

class ProductsList extends Component {
  render () {
    // console.log('all the products', this.props.allProducts)
    let allProducts = this.props.allProducts
    let allProductsCard = allProducts.map((item) => {
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
        <div className='prodWrapper allProdWrapper'>
          {allProductsCard}
        </div>
      </div>
    )
  }

}

export default ProductsList
