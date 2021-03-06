import HttpStatus from 'http-status-codes';
import { ApolloError } from 'apollo-server-express';

import Context from '../models/Context';
import Category from '../models/Category';
import { IDPayload } from '../domains/general';
import { CategoryPayload } from '../domains/category';
import { validateContext } from '../utils/validations';
import * as categoryService from '../services/category';

/**
 * Mutation for creating a new category.
 *
 * @export
 * @param {*} parent
 * @param {CategoryPayload} payload
 * @param {Context} context
 * @returns {Promise<object>}
 */
export async function createCategory(parent: any, payload: CategoryPayload, context: Context): Promise<object> {
  // Validate
  await validate(context, payload);

  return categoryService.create(payload, context.user);
}

/**
 * Mutation for editing an existing category by id.
 *
 * @export
 * @param {*} parent
 * @param {CategoryPayload} payload
 * @param {Context} context
 * @returns {Promise<object>}
 */
export async function editCategory(parent: any, payload: CategoryPayload, context: Context): Promise<object> {
  const { id, name } = payload;

  if (!id) {
    throw new ApolloError(`Field "id" cannot be empty`, HttpStatus.FORBIDDEN.toString());
  }

  await validate(context, payload);

  const updateData = {
    name
  };

  return categoryService.edit(id, updateData, context.user);
}

/**
 * Mutation to delete an existing category.
 *
 * @export
 * @param {*} parent
 * @param {IDPayload} payload
 * @param {Context} context
 * @returns {Promise<object>}
 */
export async function deleteCategory(parent: any, payload: IDPayload, context: Context): Promise<object> {
  const { id } = payload;

  validateContext(context);

  if (!id) {
    throw new ApolloError(`Field "id" cannot be empty`, HttpStatus.FORBIDDEN.toString());
  }

  return categoryService.remove(id);
}

/**
 * Validate the payload.
 * Throws an error if any of the validation fails.
 *
 * @param {Context} context
 * @param {CategoryPayload} payload
 */
async function validate(context: Context, payload: CategoryPayload) {
  const { id = null, name } = payload;

  validateContext(context);

  if (!name || !name.length) {
    throw new ApolloError(`Field "name" cannot be empty`, HttpStatus.BAD_REQUEST.toString());
  }

  // Check if the category already exists
  const existingCategory = await new Category().where({ name }).fetch();

  if ((id && existingCategory && existingCategory.id !== id) || (!id && existingCategory)) {
    throw new ApolloError('The category already exists', HttpStatus.BAD_REQUEST.toString());
  }
}
