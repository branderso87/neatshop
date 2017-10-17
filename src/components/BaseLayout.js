import React, { Component } from 'react'
import '../styles/index.css'
import {NavLink, Link} from 'react-router-dom'
import {Header, Menu, Container, Segment, Grid, Divider, Image, List} from 'semantic-ui-react'


class BaseLayout extends Component {
  render () {
    return (
      <div>
            <Menu fixed='top' pointing secondary>
              <Container className='topMenu'>
                <Menu.Item as={NavLink} name='Neatshop' to='/' />
                <Menu.Item as={NavLink} name='Products' to='/products' />
                <Menu.Item as={NavLink} name='About' to='/about' />
              </Container>
            </Menu>
        <main>
          {this.props.children}
        </main>
        <footer className='footWrapper'>
          <Segment inverted vertical className='footSegment'>
            <Container textAlign='center'>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 1' />
                    <List link inverted>
                      <List.Item as='a'>Link One</List.Item>
                      <List.Item as='a'>Link Two</List.Item>
                      <List.Item as='a'>Link Three</List.Item>
                      <List.Item as='a'>Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 2' />
                    <List link inverted>
                      <List.Item as='a'>Link One</List.Item>
                      <List.Item as='a'>Link Two</List.Item>
                      <List.Item as='a'>Link Three</List.Item>
                      <List.Item as='a'>Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 3' />
                    <List link inverted>
                      <List.Item as='a'>Link One</List.Item>
                      <List.Item as='a'>Link Two</List.Item>
                      <List.Item as='a'>Link Three</List.Item>
                      <List.Item as='a'>Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Footer Header' />
                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Divider inverted section />
              <Image centered size='mini' src='/logo.png'/>
              <List horizontal inverted divided link>
                <List.Item as='a' href='#'>Site Map</List.Item>
                <List.Item as='a' href='#'>Contact Us</List.Item>
                <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                <List.Item as='a' href='#'>Privacy Policy</List.Item>
              </List>
            </Container>
          </Segment>
        </footer>
      </div>
    )
  }
}

export default BaseLayout
