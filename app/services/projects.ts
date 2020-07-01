import * as uuid from 'uuid';

import { ProjectDTO } from '../dto';
import * as db from '../util/dynamodb';

/**
 * Create project
 * @param {ProjectDTO} data
 */
export const createProject = (data: ProjectDTO): Promise<any> => {
  return db.updateItem({
    TableName: process.env.ITEM_TABLE!,
    Key: { id: uuid.v5() },
    UpdateExpression: `SET ${db.buildExpression(data)}`,
    ExpressionAttributeValues: {
      ...db.buildAttributes(data),
    },
  });
};

/**
 * Update a project by id
 *
 * @param {ProjectDTO} data
 */
export const updateProjectById = (id: string, data: ProjectDTO): Promise<any> => {
  return db.updateItem({
    TableName: process.env.ITEM_TABLE!,
    Key: { id },
    UpdateExpression: `SET ${db.buildExpression(data)}`,
    ExpressionAttributeValues: {
      ...db.buildAttributes(data),
    },
  });
};

/**
 * Find projects
 */
export const findProjects = () => {
  return db.scanItems({
    TableName: process.env.PROJECTS_DYNAMODB_TABLE!,
  });
};

/**
 * Query project by id
 * @param {string} id
 */
export const findOneProjectById = (id: string) => {
  return db.getItem({
    TableName: process.env.PROJECTS_DYNAMODB_TABLE!,
    Key: { id },
  });
};

/**
 * Delete project by id
 * @param {string} id
 */
export const deleteOneProjectById = (id: string) => {
  return db.deleteItem({
    TableName: process.env.ITEM_TABLE!,
    Key: { id },
  });
};
