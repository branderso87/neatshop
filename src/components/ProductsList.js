import React, { Component } from 'react'

class ProductsList extends Component {
  render () {
    console.log('all the products', this.props.allProducts)
    let allProducts = this.props.allProducts

    let allProductsCard = allProducts.map((item) => {
      return (
        <div className='prodCard' key={item.itemId[0]}>
        <a href={item.viewItemURL[0]}>
          <div className='prodInfo'>
            <img className='prodImg' src={item.pictureURLLarge} alt={item.title[0]} />
            <div className='prodName'>{item.title[0]}</div>
          </div>
        </a>
      </div>
      )
    })
    console.log(allProductsCard)
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
