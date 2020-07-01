import './config';
import "reflect-metadata";

import { Handler } from 'aws-lambda';

import *  as projectsController from './controller';

export const findProjects: Handler = projectsController.find;

export const findOneProject: Handler = projectsController.findOne;

export const createProject: Handler = projectsController.create;

export const updateProject: Handler = projectsController.update;

export const deleteProject: Handler = projectsController.deleteOne;