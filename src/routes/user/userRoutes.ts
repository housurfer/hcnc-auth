import { signOut } from './signOut';
import { currentUser } from './currentUser';
import { signIn } from './signIn';
import { signUp } from './signUp';
import express, {Request, Response} from 'express';
import 'express-async-errors';
import { body, validationResult, ValidationError } from 'express-validator';
import { NotFoundError } from '@hcnc/common';
import { User } from '../../model/userSchema';
import { loginRules } from '../../rules/login';
import { currentUserMW } from '@hcnc/common';


 const router = express.Router();

// router.get('/api/users/currentUser',currentUserMW, currentUser,requireAuthMW);
router.get('/api/users/currentUser',currentUserMW, currentUser);
 router.post('/api/users/signUp', loginRules, signUp);
 router.post('/api/users/signIn', loginRules, signIn);
 router.post('/api/users/signOut',signOut);
 
//  router.post('/api/users/signIn',(req, res) => {
//   res.send("sign up");
//  });

router.all('*', async (req, res)=>{
  throw new NotFoundError();
});

 export { router as userRouter};

