import path from 'path';
import dotenv from 'dotenv';

const { NODE_ENV } = process.env;

const dotenvPath = path.join(__dirname, '..', `.env.${NODE_ENV}`);

dotenv.config({
  path: dotenvPath,
});
