import { Context } from 'aws-lambda';
import { ProjectDTO } from '../dto';
import * as projectsService from '../services/projects';
import { success, error } from '../util/messages';

const logContextInfo = (context: Context) => {
  console.log(context.functionName, context.functionVersion, context.memoryLimitInMB);
};

/**
 * Find projects list
 */
export const find = async () => {
  try {
    const result = await projectsService.findProjects();
    return success(result);
  } catch (err) {
    return error(err.code, err.message);
  }
};

/**
 * Query project by id
 *
 * @param {*} event
 * @param {Context} context
 */
export const findOne = async (event: any, context: Context) => {
  logContextInfo(context);

  const id: string = event.pathParameters.id;

  try {
    const result = await projectsService.findOneProjectById(id);
    return success(result);
  } catch (err) {
    return error(err.code, err.message);
  }
};

/**
 * Create project
 *
 * @param {*} event
 * @param {Context} context
 *
 */
export const create = async (event: any, context?: Context) => {
  logContextInfo(context);

  const data: ProjectDTO = JSON.parse(event.body);
  console.log(data);

  try {
    const result = await projectsService.createProject(data);
    return success(result);
  } catch (err) {
    return error(err.code, err.message);
  }
};

/**
 * Update project
 *
 * @param {*} event
 * @param {Context} context
 *
 */
export const update = async (event: any, context: Context) => {
  logContextInfo(context);

  const id: string = event.pathParameters.id;
  const data: ProjectDTO = JSON.parse(event.body);

  try {
    const result = await projectsService.updateProjectById(id, data);
    return success(result);
  } catch (err) {
    return error(err.code, err.message);
  }
};

/**
 * Query project by id
 *
 * @param {*} event
 * @param {Context} context
 */
export const deleteOne = async (event: any, context: Context) => {
  logContextInfo(context);

  const id: string = event.pathParameters.id;

  try {
    const result = await projectsService.deleteOneProjectById(id);
    return success(result);
  } catch (err) {
    return error(err.code, err.message);
  }
};
