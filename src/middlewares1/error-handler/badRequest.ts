import { CustomError } from "./custom-errors";

export class BadRequestError extends CustomError {

  statusCode = 400;
  constructor(public msg: string){
    super(msg);
    Object.setPrototypeOf(this, BadRequestError.prototype);

  }
  serializeError(){
    return [{ message: this.msg }];

  }


}