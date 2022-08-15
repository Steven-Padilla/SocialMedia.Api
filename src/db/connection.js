import { Sequelize } from 'sequelize';
import 'dotenv/config'


// export const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'postgres'
// });

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  //Options to teh connection works
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});