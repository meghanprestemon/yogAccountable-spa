import React, { Component } from 'react';
import { Segment, Header, Container, Table, Loader, Dimmer } from 'semantic-ui-react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getEntries } from '../actions';
import { bindActionCreators } from 'redux';
import EntriesTable from './EntriesTable.js';

class AccountEntries extends Component {
  componentDidMount() {
    this.props.getEntries();
  }

  render () {
    const { userFirstName, entries } = this.props;
    let tableBody;
    if (entries.length) {
      tableBody = <EntriesTable />
    }

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

              {tableBody}

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
