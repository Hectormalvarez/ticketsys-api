import { Sequelize } from 'sequelize-typescript';
import dbConfig from '../config/dbConfig';

import { User } from './models/User';
import { Token } from './models/Token';
import { Ticket } from './models/Ticket';
import { UserTicket } from './models/UserTicket';

/*
  Configure database connection details here. Also include the models you will be working with 
*/

const sequelizeConnection = new Sequelize({
  database: dbConfig.DB,
  username: dbConfig.USER,
  password: dbConfig.PASSWORD,
  dialect: 'mysql',
  host: dbConfig.HOST,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.aquire,
    idle: dbConfig.pool.idle
  },
  // models: [User, Token],
  models: [User, Ticket, UserTicket]
});

export default sequelizeConnection;
