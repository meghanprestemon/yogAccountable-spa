import React, { Component } from 'react';
import { Segment, Header, Container, Table } from 'semantic-ui-react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {  } from '../actions';
import { bindActionCreators } from 'redux';

class AccountEntries extends Component {
//   constructor(props) {
//     super(props)
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     let username = event.target.username.value;
//     let password = event.target.password.value;
//
//     if (username !== '' && password !== '') {
//       this.props.login(username, password);
//     }
//   }
//
  render () {
    const { userFirstName } = this.props;

    return (
      <div>
        <Container text>
          <Header as='h2' attached='top'>
            Welcome back, {userFirstName}!
          </Header>
          <Segment attached>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Location</Table.HeaderCell>
                  <Table.HeaderCell>Type of Yoga</Table.HeaderCell>
                  <Table.HeaderCell>Practice Start Time</Table.HeaderCell>
                  <Table.HeaderCell>Practice End Time</Table.HeaderCell>
                  <Table.HeaderCell>Practice Duration</Table.HeaderCell>
                  <Table.HeaderCell>Comments</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    First
                  </Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userFirstName = state.login.userFirstName
  return {
    userFirstName
  }
}
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//   login
// }, dispatch)
//
export default connect(
  mapStateToProps,
//   mapDispatchToProps
)(AccountEntries)
