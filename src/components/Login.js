import React, { Component } from 'react';
import { Segment, Header, Container, Grid, Button, Icon, Form, Divider, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../actions';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;

    if (username !== '' && password !== '') {
      this.props.login(username, password);
    }
  }

  render () {
    const { hideMessage } = this.props;
    console.log(this.props);
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
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Message
                    hidden={hideMessage}
                    error
                    header='Please Try Again'
                    content='The email or password provided is incorrect.'
                  />
                </Grid.Column>
              </Grid.Row>
              <Form className='login' onSubmit={this.handleSubmit}>
                <Form.Input required label='Username' placeholder='username' name='username' />
                <Form.Input required type='password' label='Password' placeholder='password' name='password' />
                <Button animated basic type='submit'>
                  <Button.Content visible>Login</Button.Content>
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
                  <p>Not a member yet? <Link to='/users/register'>Register here</Link></p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const hideMessage = state.login.hideMessage
  return {
    hideMessage
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
