import { CustomError } from "./error-handler/custom-errors";

export class NotFoundError extends CustomError {

  statusCode = 404;
  constructor(){
    super('Not found Error!')
    Object.setPrototypeOf(this, NotFoundError.prototype);

  }
  serializeError(){
    return [{ message: 'Not Found Error'}];

  }


}