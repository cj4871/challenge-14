require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.BLOG_DB, process.env.BLOG_USER, process.env.BLOG_PW, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
module.exports = sequelize;