import { Password } from './../../common/hashing';
import { NextFunction } from 'express';
import { BadRequestError } from '@hcnc/common';
import {Request, Response} from 'express';
import 'express-async-errors';
import { User } from '../../model/userSchema';
import jwt from 'jsonwebtoken';

import { requestErrorHandler } from '@hcnc/common';
import { tokenToString } from 'typescript';

export const signIn = async (req: Request, res: Response, next: NextFunction) =>  {
requestEr
rorHandler(req);
// const errors = validationResult(req);
// if (!errors.isEmpty()){
//  throw new RequestValidationError(errors.array());
// }
const { email, password} = req.body;
const existingUser = await User.findOne({email});
if (!existingUser){
  throw new BadRequestError('bad credentials');

}
const passwordMatch = await Password.compare(existingUser.password, password);

if (!passwordMatch){
  throw new BadRequestError('bad credentials');
}
const jtoken = jwt.sign({
id: existingUser.id,
email: existingUser.email

},process.env.JWT_KEY!);
req.session = { 
jwt : jtoken
};
res.status(200).send(existingUser);

}
