import request from 'supertest'
import { app } from '../../../app'
import { test } from '../../../common/testData';

it('returns 400 with invalid email/password', async () =>{
  await request(app)
  .post(test.api.signIn)
  .send(test.loginValid)
  .expect(test.statusCode.InvalidRequest);
})

it('Successfully logged in. set cookie and Returns 200', async () =>{
  const response = await request(app)
  .post(test.api.signUp)
  .send(test.loginValid)
  .expect(test.statusCode.recordCreated);

  await request(app)
  .post(test.api.signIn)
  .send(test.loginValid)
  .expect(test.statusCode.RequestCompleted);
  expect(response.get('Set-Cookie')).toBeDefined();  

})
