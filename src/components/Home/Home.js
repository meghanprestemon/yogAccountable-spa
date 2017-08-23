import React, { Component } from 'react';
import { Segment, Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
  render () {
    return (
      <div>
        <Container text>
          <Segment>
            <Header as='h2'>
              Welcome to yogAccountable.
            </Header>
            <p>
              This website is designed to help motivate you to keep your practice consistent.
              We've all been there - you have every intention of focusing on self-care but things just come up.
              'This week I'll start a new routine' or 'This month I'm making the time to incorporate more
              wellness in my life' but then you have to work late, forgot you need to go to the store,
              or any other plethora of excuses to keep you from taking care of <strong>you</strong>.
              yogAccountable is here to help you keep yourself accountable and stay on track.
              Enjoy setting goals for yourself and finally meeting them by keeping track of your progress.
              Get started now.
            </p>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Home)
