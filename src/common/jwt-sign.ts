import jwt from 'jsonwebtoken';
import { User } from '../model/userSchema';
import { Request } from 'express';

export const jtoken = (user: User, req: Request) => jwt.sign({
id: user.id,
email: user.email
},process.env.JWT_KEY!);
req.session = { 
jwt : jtoken
};