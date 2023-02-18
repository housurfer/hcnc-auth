import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "./error-handler/notAuthorized-error";

export const requireAuthMW = (req: Request, res: Response, next: NextFunction) => {

  if (!req.currentUser){
    throw new NotAuthorizedError('Not Authorized/Not Logged in');
  }
  next();
}