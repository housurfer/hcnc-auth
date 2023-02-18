import { CustomError } from "./custom-errors";

export class NotAuthorizedError extends CustomError  {
constructor(public message: string){
  super(message);
  Object.setPrototypeOf(this,NotAuthorizedError.prototype)
}
 statusCode = 401;   //Not authorized

 serializeError(){
  return [{ message : this.message}];
  }


 }
