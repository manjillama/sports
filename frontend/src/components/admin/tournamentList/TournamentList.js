import React from 'react';
import PropTypes from 'prop-types';
import { Table, Icon } from 'semantic-ui-react';

import { TOURNAMENT_ACTIONS } from '../../../constants/constants';

function TournamentList(props) {
  const { handleOpen, tournaments } = props;

  return (
    <Table compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Tournament Name</Table.HeaderCell>
          <Table.HeaderCell>Start Date</Table.HeaderCell>
          <Table.HeaderCell>Finish Date</Table.HeaderCell>
          <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {tournaments &&
        tournaments.map(tournament => (
          <Table.Body key={tournament.id}>
            <Table.Row>
              <Table.Cell>{tournament.title}</Table.Cell>
              <Table.Cell>{tournament.startDate}</Table.Cell>
              <Table.Cell>{tournament.finishDate}</Table.Cell>
              <Table.Cell>
                <Icon
                  color="blue"
                  style={{ cursor: 'pointer' }}
                  name={TOURNAMENT_ACTIONS.edit}
                  onClick={() =>
                    handleOpen(TOURNAMENT_ACTIONS.edit, tournament)
                  }
                />
                <Icon
                  color="red"
                  style={{ cursor: 'pointer' }}
                  name={TOURNAMENT_ACTIONS.remove}
                  onClick={() =>
                    handleOpen(TOURNAMENT_ACTIONS.remove, tournament)
                  }
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
    </Table>
  );
}

TournamentList.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  tournaments: PropTypes.array.isRequired
};

export default TournamentList;