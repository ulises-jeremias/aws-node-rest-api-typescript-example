import 'pg';
import { Sequelize, DataTypes } from "sequelize";
import todoSchemeCreate from "./models/todo";

console.log(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`);

// elephantsql endpoint
const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`
);

const todo = todoSchemeCreate(sequelize, DataTypes);

sequelize.sync(/*{ force: true }*/);

export default {
  Sequelize,
  sequelize,
  todo,
};
