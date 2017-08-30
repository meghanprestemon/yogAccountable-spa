import React, { Component } from 'react';
import { Segment, Header, Container, Table, Loader } from 'semantic-ui-react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class EntriesTable extends Component {

  render () {
    const { entries } = this.props;
    console.log('*create entry rows here*', entries);

    return (
      <Table.Body>
        {entries.map(entry =>
          <Table.Row key={entry.id}>
            <Table.Cell>
              <div>
                {entry.date.toString()}
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
                {entry.duration.minutes}
              </div>
            </Table.Cell>
            <Table.Cell>
              <div>
                {entry.comments}
              </div>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const entries = state.entries.entryData;
  console.log('looking for entries', state.entries);

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
