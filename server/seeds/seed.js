const db = require('../config/connection');
const { User, } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');

  console.log('Database cleared!');
  process.exit(0);
});
