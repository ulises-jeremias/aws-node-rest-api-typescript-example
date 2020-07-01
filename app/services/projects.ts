import * as uuid from 'uuid';

import { CreateProjectDTO, UpdateProjectDTO } from '../dto';
import { DynamoStore } from '@shiftcoders/dynamo-easy';
import { Project } from '../models';

const projectStore = new DynamoStore(Project);

/**
 * Create project
 * @param params
 */
export const createProject = (data: CreateProjectDTO): Promise<any> => {
  const project = {
    ...data,
    id: uuid.v5(),
  };
  return projectStore.put(project).exec();
};

/**
 * Update a project by id
 * @param id
 * @param data
 */
export const updateProjects = (data: UpdateProjectDTO): Promise<any> => {
  return projectStore.put(data).exec();
};

/**
 * Find projects
 */
export const findProjects = () => {
  return projectStore.scan().exec();
}

/**
 * Query project by id
 * @param id
 */
export const findOneProjectById = (id: string) => {
  return projectStore.get(id).exec();
}

/**
 * Delete project by id
 * @param id
 */
export const deleteOneProjectById = (id: string) => {
  return projectStore.delete(id).exec();
}
