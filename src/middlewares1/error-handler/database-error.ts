import { CustomError } from "./custom-errors";

export class DataBaseError extends CustomError {

  msg = "Error connecting database";
  constructor(){
    super('Error Connecting DB...');
    Object.setPrototypeOf(this, DataBaseError.prototype);
  }
  statusCode = 500;
  serializeError(){
    return [{ message : this.msg}]



  }


}