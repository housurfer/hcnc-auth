import { User } from '../../model/userSchema';
import jwt from 'jsonwebtoken';
import { Request, Response} from 'express'




export const signOut = (req: Request, res: Response) =>{

  req.session = null;
  res.send({});
}