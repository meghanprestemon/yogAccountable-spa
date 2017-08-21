import React, { Component } from 'react'
import { Icon, Popup, Button, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  } from '../actions';

class Footer extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='footer'>
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button basic content='back to top' icon='arrow up' labelPosition='right' onClick={this.handleItemClick} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className='footer-links'>
            <Grid.Column textAlign="center">
              <Popup
                trigger={<Button circular icon='mail outline' />}
                content='meghanprestemon@gmail.com'
                on='click'
              />
              <a href="https://github.com/meghanprestemon" target="_blank">
              <Icon name='github' size='big' />
              </a>
              <a href="https://www.linkedin.com/in/meghanprestemon/" target="_blank">
                <Icon name='linkedin' size='big' />
              </a>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column textAlign="center">
              <p>&copy; 2017 Meghan Prestemon</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Footer)
