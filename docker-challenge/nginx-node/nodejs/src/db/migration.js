import { connection } from './config.js'


const migrationUp = () => {
  const createPeopleTable = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id));`;
  connection.query(createPeopleTable);
  connection.end();
}

migrationUp();
