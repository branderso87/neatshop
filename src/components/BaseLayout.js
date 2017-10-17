import React, { Component } from 'react'
import '../styles/index.css'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'


class BaseLayout extends Component {
  render () {
    return (
      <div>
        <header>
            <Menu pointing secondary>
              <Menu.Item as={NavLink} name='Neatshop' to='/' />
              <Menu.Item as={NavLink} name='Products' to='/products' />
              <Menu.Item as={NavLink} name='About' to='/about' />
            </Menu>
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
