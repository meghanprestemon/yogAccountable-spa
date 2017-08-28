import React, { Component } from 'react';
import { Segment, Header, Container, Table } from 'semantic-ui-react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getEntries } from '../actions';
import { bindActionCreators } from 'redux';

class AccountEntries extends Component {
  constructor(props) {
    super(props)

    this.populateTable = this.populateTable.bind(this);
  }

  populateTable(userId) {
    let entries = this.props.getEntries();

    console.log('entries', entries);

    let entryRows = [];

    // entries.forEach(entry => )
  }

  render () {
    const { userFirstName, entries } = this.props;
    // let entryRows = [];
    // entries.forEach(entry => {
    //   entryRows.push(<tr Population={zone.population} Zone={zone.name} />);
    // };
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
                {this.populateTable()}
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
