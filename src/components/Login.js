import React, { Component } from 'react';
import { Segment, Header, Container, Grid, Button, Icon, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {
  render () {
    return (
      <div>
        <Container text>
          <Segment>
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Header as='h2'>
                    Login
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Form>
                <Form.Input label='Username' placeholder='username'/>
                <Form.Input label='Password' placeholder='password'/>
                <Button animated basic type='submit'>
                  <Button.Content visible>Login</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow circle outline right' />
                  </Button.Content>
                </Button>
              </Form>
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
)(Login)
