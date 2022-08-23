import { Sequelize } from 'sequelize';
import 'dotenv/config'
import {DATABASE_URL} from '../config.js'


/*This is for localy */
export const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});



/*This is for the deploy*/
// export const sequelize = new Sequelize(DATABASE_URL, {
//   //Options to teh connection works
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// });