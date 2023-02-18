import { currentUser } from './../currentUser';
import request from 'supertest'
import { app } from '../../../app'
import { test } from '../../../common/testData';

it('Successfully logged in. set cookie and Returns 200', async () =>{

  const cookie = await signIn()
  
  const response = await request(app)
  .get(test.api.currentUser)
  .set('Cookie', cookie)
  .send(test.loginValid)
  .expect(test.statusCode.RequestCompleted)
  expect(response.body.currentUser.email).toEqual(test.loginValid.email)

})
