import React, { Component } from 'react'
import { Menu, Segment, Icon, Popup, Button } from 'semantic-ui-react'
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
        <Button basic content='back to top' icon='arrow up' labelPosition='right' onClick={this.handleItemClick} />

        <div className='footer-links'>
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
        </div>

        <p>&copy; 2017 Meghan Prestemon</p>
      </div>
    )
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Footer)
