"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
require('dotenv').config();
const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017`;
const DB_NAME = 'Cookmaster';
const mongoCliente = new mongodb_1.MongoClient(MONGO_DB_URL);
const connection = () => mongoCliente
    .connect()
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
    console.error(err);
    process.exit();
});
module.exports = connection;
//# sourceMappingURL=connection.js.map