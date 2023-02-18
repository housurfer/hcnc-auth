import { User } from '../../model/userSchema';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction} from 'express'
import { currentUserMW } from '@hcnc/common';

export const currentUser = (req: Request, res: Response) =>{
  res.send({currentUser: req.currentUser || null})

}