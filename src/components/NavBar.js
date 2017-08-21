import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
            <Menu.Item name='yogAccountable' active={activeItem === 'yogAccountable'} onClick={this.handleItemClick} />
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick} />
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
            <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick} />
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
