import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import Home from './Home/Home.js';
import Login from './Login.js';
import {  } from '../actions';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Menu position='left'>
            <Menu.Item as={Link} to='/' name='home' onClick={this.handleItemClick}>
              yogAccountable
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              home
            </Menu.Item>
            <Menu.Item name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick}>
              videos
            </Menu.Item>
            <Menu.Item as={Link} to='/users/login' name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
              login
            </Menu.Item>
            <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick}>
              register
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   const messages = state.messages;
//   const selectedMsgIds = state.messages.filter(message => message.selected === true).map(message => message.id);
//   return {
//     messages,
//     selectedMsgIds
//   }
// }
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//   updateReadState,
//   updateLabelState,
//   deleteMessages,
//   toggleSelectAll
// }, dispatch)

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(NavBar)
