import { en } from '../lang/en';
import Context from '../models/Context';
import * as userService from '../services/user';
import MissingUserNameOrPassword from '../error/MissingUserNameOrPasswordError';

/**
 * Mutation for a user to login.
 *
 * @param {Object} parent
 * @param {Object} mutationParams
 * @param {Context} context
 * @returns {Object}
 */
export const login = async (
  parent: any,
  { password, email }: { password: string; email: string },
  context: Context
) => {
  if (!email || !password) {
    throw new MissingUserNameOrPassword(en.MISSING_USERNAME_OR_PASSWORD);
  }

  const data = await userService.loginUser(password, email);

  return { ...data };
};
