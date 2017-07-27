import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ProductsList from './ProductsList'

class MainProductsPage extends Component {

  render () {
    return (
      <div className='catWrapper'>
        <aside className='catSide'>
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
        <div>
          <img src='https://cdn.shopify.com/s/files/1/1790/3573/products/DSC_3619-small_1666x.jpg?v=1492725457' alt='' />
        </div>
        <div>
          <ProductsList />
        </div>
      </div>
    )
  }

}

export default MainProductsPage
