import React, { Component } from 'react'
import '../styles/index.css'
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header className='mainHead'>
          <nav>
            <ul>
              <li><NavLink className="mainNav" to="/">Neatshop</NavLink></li>
              <li><NavLink className="mainNav" to="/products">Products</NavLink></li>
              <li><NavLink className="mainNav"to="/about">About</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          {this.props.children}
        </main>
        <footer>

        </footer>
      </div>
    )
  }
}

export default BaseLayout
