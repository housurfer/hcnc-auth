import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction} from 'express'

interface userPayload{
  id: string,
  email: string
}

declare global{
  namespace Express{
    interface Request{
      currentUser? : userPayload
    }
  }
}

export const currentUserMW = (req: Request, res: Response, next: NextFunction) =>{
try {
  if(!req.session?.jwt){
   return next();
  }
  const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as userPayload;
  req.currentUser = payload;

  res.send({currentUser : payload})

}catch(err){

}
next();

}