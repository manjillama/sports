import * as httpHelper from '../utils/httpHelper';

/**
 * Fetch the list of all games.
 *
 * @export
 * @returns
 */
export async function fetchAllGames() {
  const queryAPI = `games`;

  const query = `
    query {
      ${queryAPI} {
        id,
        name,
        shortName
      }
    }
  `;

  return await httpHelper.getResponse(queryAPI, query);
}

/**
 * Create a new game.
 *
 * @export
 * @param {{ name: string; shortName: string }} payload
 * @returns
 */
export async function createGame(payload: { name: string; shortName: string }) {
  const queryAPI = `createGame`;

  const mutation = `
    mutation {
      ${queryAPI} (name: "${payload.name}", shortName: "${payload.shortName}") {
        id,
        name,
        shortName
      }
    }
  `;

  return await httpHelper.getResponse(queryAPI, mutation);
}
