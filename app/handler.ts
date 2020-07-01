import './config';

import { Handler, Context } from 'aws-lambda';

import *  as projectsController from './controller';

export const createProject: Handler = (event: any, context: Context) => {
  return projectsController.create(event, context);
};

export const updateProject: Handler = (event: any) => projectsController.update(event);

export const findProjects: Handler = () => projectsController.find();

export const findProject: Handler = (event: any, context: Context) => {
  return projectsController.findOne(event, context);
};

export const deleteProject: Handler = (event: any) => projectsController.deleteOne(event);