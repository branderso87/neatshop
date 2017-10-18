import React, { Component } from 'react'
import '../styles/index.css'
import {NavLink, Link} from 'react-router-dom'
import {Header, Menu, Container, Segment, Grid, Divider, Image, List} from 'semantic-ui-react'


class BaseLayout extends Component {
  render () {
    return (
      <div>
          <div>
            <Menu fixed='top' pointing secondary id='topMenu'>
              <Container>
                <Menu.Item as={NavLink} name='Neatshopp' to='/' />
                <Menu.Item as={NavLink} name='Products' to='/products' />
                {/* <Menu.Item as={NavLink} name='Contact' to='/contact' /> */}
              </Container>
            </Menu>
          </div>
        <main>
          {this.props.children}
        </main>
        <footer className='footWrapper'>
          <Segment inverted vertical id='footSegment'>
            <Container textAlign='center'>
              <Grid divided inverted stackable>
                <Grid.Row>
                  {/* <Grid.Column width={3}>
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
                  </Grid.Column> */}
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='CONTACT US' />
                    <p>If you have any questions or just want to reach out, <a href='mailto:cgrwill@gmail.com'>email us</a></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Divider inverted section />
              <Image centered size='mini' src='/logo.png'/>
              {/* <List horizontal inverted divided link>
                <List.Item as='a' href='#'>Site Map</List.Item>
                <List.Item as='a' href='mailto:cgrwill@gmail.com'>Contact Us</List.Item>
                <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                <List.Item as='a' href='#'>Privacy Policy</List.Item>
              </List> */}
            </Container>
          </Segment>
        </footer>
      </div>
    )
  }
}

export default BaseLayout
