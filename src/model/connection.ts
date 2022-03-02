import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017`;
const DB_NAME = 'Type-script-Project';

const mongoCliente = new MongoClient(MONGO_DB_URL);

const connection = () => mongoCliente
  .connect()
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit();
    });

export default connection;
