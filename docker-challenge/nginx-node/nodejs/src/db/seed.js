import { connection } from './config.js'

export const createPerson = () => {
  const createPersonSQL = `INSERT people(name) values('Isaias F M')`;
  connection.query(createPersonSQL);
  connection.end();
};
