import React, { Component } from 'react'
import '../styles/index.css'
import {NavLink} from 'react-router-dom'



class BaseLayout extends Component {
  render () {
    return (
      <div>
        <header className='mainHead'>
          <nav className='navWrapper'>
            <ul className='mainNav'>
              <li><NavLink className='mainNavLink' to='/'>Neatshop</NavLink></li>
              <li><NavLink className='mainNavLink' to='/products'>Products</NavLink></li>
              <li><NavLink className='mainNavLink'to='/about'>About</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          {this.props.children}
        </main>
        <footer>
          <div className='footLeft'>Information about stuff.</div>
          <div className='footRight'>Signup</div>
        </footer>
      </div>
    )
  }
}

export default BaseLayout
