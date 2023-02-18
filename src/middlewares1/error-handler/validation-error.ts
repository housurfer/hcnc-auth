import { ValidationError } from 'express-validator';
import { CustomError } from "./custom-errors";

export class RequestValidationError extends CustomError  {
constructor(public errors: ValidationError[]){
  super('Error with request....');
  Object.setPrototypeOf(this,RequestValidationError.prototype)
}
 statusCode = 400;

 serializeError(){
  return this.errors.map(err =>{
    return {
      message : err.msg,
      field : err.param
    }
  })


 }

}