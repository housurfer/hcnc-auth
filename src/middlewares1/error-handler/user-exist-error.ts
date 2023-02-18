import { ValidationError } from 'express-validator';
import { CustomError } from "./custom-errors";

export class UserExistError extends CustomError  {
constructor(public existedUser: string){
  super('User Existed....');
  Object.setPrototypeOf(this,UserExistError.prototype)
}
 statusCode = 400;

 serializeError(){
  return [{ message : "User Existed"}];
  }


 }

