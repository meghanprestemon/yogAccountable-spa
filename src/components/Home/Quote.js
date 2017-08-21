import React, { Component } from 'react';
import { Segment, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Quote extends Component {


  render () {
    return (
      <div className='quote-segment'>
        <div className='quote'>
          <Header as='h3' id='quote-text'>{api.quoteText}</Header>
          <Header as='h4' id='author'>{api.author}</Header>
        </div>
        <Button basic content='more inspiration' icon='leaf' />
      </div>
    );
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Quote)
