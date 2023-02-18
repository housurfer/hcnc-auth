export const test = {
  loginValid :{
  email: 'test@test.com',
  password: 'password'
  },
  loginWrongPassword :{
    email: 'test@test.com',
    password: 'password1'
    },
  api : {
    signIn : '/api/users/signIn',
    signUp : '/api/users/signUp',
    currentUser : '/api/users/currentUser',
    signOut : '/api/users/signOut'
  },
  statusCode : {

     recordCreated : 201,
     RequestCompleted: 200,
     InvalidRequest: 400,
     ServerError: 500

  }


}
