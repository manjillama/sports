import { Collection } from 'bookshelf';

import Tournament from '../models/tournament';

/**
 * Fetch tournament by ID.
 *
 * @export
 * @param {number} id
 * @returns {Tournament|null}
 */
export async function fetchById(id: number) {
  try {
    const tournament: Tournament = await new Tournament().where({ id }).fetch();

    return tournament;
  } catch (error) {
    return null;
  }
}

/**
 * Fetch list of all tournaments.
 *
 * @export
 * @returns
 */
export async function fetchAll() {
  try {
    const tournaments: Collection<Tournament> = await new Tournament().fetchAll();

    return tournaments;
  } catch (error) {
    return null;
  }
}
