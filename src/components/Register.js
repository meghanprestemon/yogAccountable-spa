import React, { Component } from 'react';
import { Segment, Header, Container, Grid, Button, Icon, Form, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Register extends Component {

  render () {
    return (
      <div>
        <Container text>
          <Segment>
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Header as='h2'>
                    Register
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Form className='login' onSubmit={this.handleSubmit}>
                <Form.Input required label='First Name' placeholder='first name' name='first-name' />
                <Form.Input required label='Last Name' placeholder='last name' name='last-name' />
                <Form.Input required label='Email Address' placeholder='email address' name='email' />
                <Form.Input required label='Username' placeholder='username' name='username' />
                <Form.Input required label='Password' placeholder='password' name='password' />
                <Button animated basic type='submit'>
                  <Button.Content visible>Register Now!</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow circle outline right' />
                  </Button.Content>
                </Button>
              </Form>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Divider />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <p>Already registered? <Link to='/users/login'>Login here</Link></p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Register)
