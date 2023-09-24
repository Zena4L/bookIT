import { CustomError } from "./customError";
import { Request } from "express";

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(public req: Request) {
    super();
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  output() {
    return [{ message: `Can't find this route ${this.req.originalUrl}` }];
  }
}
