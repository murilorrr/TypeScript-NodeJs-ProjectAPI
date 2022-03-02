import chai from 'chai';
const { expect } = chai;

// simulando requests http
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

// mock de banco de dados em memoria

// import sinon from 'sinon';
// import { MongoClient } from 'mongodb';
// import { MongoMemoryServer } from 'mongodb-memory-server';

// //

import server from '../../src/app/server';

const user = {
  "name": "Murilo",
  "email": "murilorsv14@gmail.com",
  "password": "123451",
  "role": "user",
};

describe('GET /clients', () => {
  describe('É esperado ao se cadastrar um usuárioapp:', () => {
    describe('quando é criado com sucesso', () => {
      let response = {};
      
      // // const DBServer = new MongoMemoryServer();

      before(async () => {
      //   const URLMock = DBServer.getUri();
      //   const connectionMock = MongoClient.connect(URLMock,
      //     { useNewUrlParser: true, useUnifiedTopology: true });

      //   sinon.stub(MongoClient, 'connect')
      //     .resolves(connectionMock);
      
        response = await chai.request(server)
          .get('/clients')
          // .set('content-type', 'application/json',)
          // .send(user);
      });

      // after(async () => {
      //   MongoClient.connect.restore();
      //   await DBServer.stop();
      // });

      
      it('retorna o código de status 200', () => {
        expect(response).to.have.status(200);
      });
      
      it('retorna um array', () => {
        expect(response).to.be.a('array');
      });
      
      it('o array possui objetos de clients ', () => {
        expect(response.body)[0].to.be.a('object');
      });
      
//       it('a propriedade "user" possui o objeto de usuário sem a senha', () => {
//         const expectedUser = { ...user }
//         delete expectedUser.password;
        
//         expect(response.body.user.email).to.be.equal(expectedUser.email);
//         expect(response.body.user.name).to.be.equal(expectedUser.name);
//         expect(response.body.user.role).to.be.equal(expectedUser.role);
//       });scribe('POST /users', () => {
//         describe('É esperado ao se cadastrar um usuário:', () => {
//           describe('quando é criado com sucesso', () => {
//             let response = {};
            
//             const DBServer = new MongoMemoryServer();
      
//             before(async () => {
//               const URLMock = DBServer.getUri();
//               const connectionMock = MongoClient.connect(URLMock,
//                 { useNewUrlParser: true, useUnifiedTopology: true });
      
//               sinon.stub(MongoClient, 'connect')
//                 .resolves(connectionMock);
            
//               response = await chai.request(server)
//                 .post('/users')
//                 .set('content-type', 'application/json',)
//                 .send(user);
//             });
      
//             after(async () => {
//               MongoClient.connect.restore();
//               await DBServer.stop();
//             });
      
            
//             it('retorna o código de status 201', () => {
//               expect(response).to.have.status(201);
//             });
            
//             it('retorna um objeto', () => {
//               expect(response.body).to.be.a('object');
//             });
            
//             it('o objeto possui a propriedade "user"', () => {
//               expect(response.body).to.have.property('user');
//             });
            
//             it('a propriedade "user" possui o objeto de usuário sem a senha', () => {
//               const expectedUser = { ...user }
//               delete expectedUser.password;
              
//               expect(response.body.user.email).to.be.equal(expectedUser.email);
//               expect(response.body.user.name).to.be.equal(expectedUser.name);
//               expect(response.body.user.role).to.be.equal(expectedUser.role);
//             });
            
//             it('tem a propriedade _id do mongoDB', () => {
//               expect(response.body.user).have.a.property('_id');
//             });
//           });
        // });
      });
  });
});