import request from 'supertest'
import { app } from '../../../app'

it('returns a 201 on successful signUp', async () =>{
  await request(app)
  .post('/api/users/signUp')
  .send({
    email: 'test@test.com',
    password: 'password'
  })
  .expect(201);
})

it('returns 400 with invalid email format',async ()=>{
  await request(app)
  .post('/api/users/signUp')
  .send({
    email: 'testtest.com',
    password: 'password'
  })
  .expect(400);


})

it('returns 400 with invalid password format',async ()=>{
  await request(app)
  .post('/api/users/signUp')
  .send({
    email: 'testtest.com',
    password: 'pd'
  })
  .expect(400);

})

it('set a cookie after sign up ', async ()=>{
   const response = await request(app)
    .post('/api/users/signUp')
    .send({
      email: 'testt@est.com',
      password: 'password'
    })
    .expect(201);
    expect(response.get('Set-Cookie')).toBeDefined();
  
  
  })
