import { NextFunction } from 'express';
import { BadRequestError } from '@hcnc/common';
import express, {Request, Response} from 'express';
import 'express-async-errors';
import { User } from '../../model/userSchema';
import jwt from 'jsonwebtoken';
import { requestErrorHandler } from '@hcnc/common';

export const signUp = async (req: Request, res: Response, next: NextFunction) =>  {
requestErrorHandler(req);
// const errors = validationResult(req);
// if (!errors.isEmpty()){
//  throw new RequestValidationError(errors.array());
// }
const { email, password} = req.body;
const existingUser = await User.findOne({email});
if (existingUser){
  console.log('User Exist: ' +existingUser);
  throw new BadRequestError('User already exists!'); 
}
console.log('creating user....');
const user = User.build({email, password});
await user.save();
const jtoken = jwt.sign({
id: user.id,
email: user.email

},process.env.JWT_KEY!);
req.session = { 
jwt : jtoken
};

res.status(201).send({user});

};

