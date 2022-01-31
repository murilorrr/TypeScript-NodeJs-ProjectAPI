import connection from "./connection";

const clients = [
  {
    name: 'maria',
    sauce: 'the juice'
  },
  {
    name: 'pedro',
    sauce: 'undefined'
  }
]

const seedling = () => {
  connection()
  .then((db) => db.collection('clients')
  .insertMany(clients)
  );
}

export default seedling;