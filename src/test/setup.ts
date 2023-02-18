import { MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { test } from '../common/testData';
import request from 'supertest'
import { app } from '../app';

declare global{
 var signIn: () => Promise<string[]>
}


let mongo: any = "";

beforeAll( async () =>{
  process.env.JWT_KEY = 'zahid';

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();
  await mongoose.connect(mongoUri, {});

});

beforeEach(async () =>{
  const collections = await mongoose.connection.db.collections();

  for( let collection of collections){
    await collection.deleteMany({});
  }

});

afterAll(async ()=>{
  if (mongo){
    await mongo.stop();
  }  
  await mongoose.connection.close();
});


//Define global function to access login

global.signIn = async () =>{
  const response = await request(app)
  .post(test.api.signUp)
  .send(test.loginValid)
  .expect(test.statusCode.recordCreated)

  const cookie = response.get('Set-Cookie')
  return cookie
}