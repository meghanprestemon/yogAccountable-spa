import React, { Component } from 'react';
import { Segment, Header, Container, Table, Loader } from 'semantic-ui-react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class EntriesTable extends Component {

  render () {
    const { entries } = this.props;

    return (
      <Table.Body>
        {entries.map(entry =>
          <Table.Row key={entry.id}>
            <Table.Cell>
              {entry.date}
            </Table.Cell>
            <Table.Cell>
              {entry.location}
            </Table.Cell>
            <Table.Cell>
              {entry.yogaType}
            </Table.Cell>
            <Table.Cell>
              {entry.startTime}
            </Table.Cell>
            <Table.Cell>
              {entry.endTime}
            </Table.Cell>
            <Table.Cell>
              {entry.duration.hours ? entry.duration.hours+'h' : null}
              {entry.duration.minutes ? entry.duration.minutes+'m' : null}
            </Table.Cell>
            <Table.Cell>
              {entry.comments}
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const entries = state.entries.entryData;

  return {
    entries
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//   getEntries
// }, dispatch)

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(EntriesTable)
