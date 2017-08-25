import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import Home from './Home/Home.js';
import Login from './Login.js';
import Register from './Register.js';
import { toggleActive } from '../actions';

class NavBar extends Component {
  render () {
    const { activeItem } = this.props;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Menu position='left'>
            <Menu.Item as={Link} to='/' name='home' onClick={() => this.props.toggleActive('home')}>
              yogAccountable
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={() => this.props.toggleActive('home')}>
              home
            </Menu.Item>
            <Menu.Item name='videos' active={activeItem === 'videos'} onClick={() => this.props.toggleActive('videos')}>
              videos
            </Menu.Item>
            <Menu.Item as={Link} to='/users/login' name='login' active={activeItem === 'login'} onClick={() => this.props.toggleActive('login')}>
              login
            </Menu.Item>
            <Menu.Item as={Link} to='/users/register' name='register' active={activeItem === 'register'} onClick={() => this.props.toggleActive('register')}>
              register
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const activeItem = state.navbarActions.activeItem;
  return {
    activeItem
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleActive
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
