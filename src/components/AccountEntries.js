import React, { Component } from 'react';
import { Segment, Header, Container, Table } from 'semantic-ui-react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getEntries } from '../actions';
import { bindActionCreators } from 'redux';

class AccountEntries extends Component {
  componentDidMount() {
    this.props.getEntries();
  }

  render () {
    const { userFirstName, entries } = this.props;
    let entryRows = [];
    console.log('*create entry rows here*', entries);
    entries.forEach(entry => {
      entryRows.push(
        <Table.Row>
          <Table.Cell>
            <div>
              {entry.date}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div>
              {entry.location}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div>
              {entry.yogaType}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div>
              {entry.startTime}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div>
              {entry.endTime}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div>
              {entry.duration}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div>
              {entry.comments}
            </div>
          </Table.Cell>
        </Table.Row>
      );
    });
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
                {entryRows}
              </Table.Body>
            </Table>
          </Segment>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userFirstName = state.login.userFirstName;
  const entries = state.entries.entryData;
  console.log('looking for entries', state.entries);

  return {
    userFirstName,
    entries
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getEntries
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountEntries)
