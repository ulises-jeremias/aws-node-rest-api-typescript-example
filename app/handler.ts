import './config';

import { Handler, Context } from 'aws-lambda';

import *  as projectsController from './controller';

export const create: Handler = (event: any, context: Context) => {
  return projectsController.create(event, context);
};

export const update: Handler = (event: any) => projectsController.update(event);

export const find: Handler = () => projectsController.find();

export const findOne: Handler = (event: any, context: Context) => {
  return projectsController.findOne(event, context);
};

export const deleteOne: Handler = (event: any) => projectsController.deleteOne(event);