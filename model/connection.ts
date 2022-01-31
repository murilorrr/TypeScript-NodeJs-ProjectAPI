import { MongoClient } from 'mongodb';
require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017`;
const DB_NAME = 'Cookmaster';

const mongoCliente = new MongoClient(MONGO_DB_URL);

const connection = () => mongoCliente
  .connect()
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit();
    });

module.exports = connection;
