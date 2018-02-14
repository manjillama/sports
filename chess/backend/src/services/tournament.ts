import { Collection } from 'bookshelf';

import Tournament from '../models/tournament';
import NotFoundError from '../errors/NotFoundError';
import NoRowUpdatedError from '../errors/NotFoundError';

/**
 * Find tournament by ID.
 *
 * @export
 * @param {number} id
 * @returns {Tournament}
 * @throws {NotFoundError|error}
 */
export async function findById(id: number) {
  try {
    const tournament: Tournament = await new Tournament({ id }).fetch();

    if (!tournament) {
      throw new NotFoundError('Tournament not found.');
    }

    return tournament;
  } catch (error) {
    throw error;
  }
}

/**
 * Fetch list of all tournaments.
 *
 * @export
 * @returns {Collection<Tournament>}
 * @throws {error}
 */
export async function getAll() {
  try {
    const tournamentsList: Collection<Tournament> = await new Tournament().fetchAll();

    return tournamentsList;
  } catch (error) {
    throw error;
  }
}

/**
 * Create a new tournament.
 *
 * @export
 * @param {object} params
 * @returns {Tournanent}
 * @throws {NoRowUpdatedError|error}
 */
export async function create(params: object) {
  try {
    const tournament: Tournament = await new Tournament(params).save();

    if (!tournament) {
      throw new NoRowUpdatedError('Unable to create a new tournament.');
    }

    return tournament;
  } catch (error) {
    throw error;
  }
}