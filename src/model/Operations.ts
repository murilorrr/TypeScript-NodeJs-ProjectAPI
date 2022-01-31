import connection from './connection'

const collection = 'clients';

const getAll = async () => {
  const result = await connection()
  .then((db) => db.collection(collection)
  .find({})
  .toArray())
  return result || null;
};

export default {
  getAll,
}
