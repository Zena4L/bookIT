import { CustomError } from "./customError";

export class NotAuthorized extends CustomError {
  statusCode = 401;
  constructor() {
    super();
    Object.setPrototypeOf(this, NotAuthorized.prototype);
  }
  output() {
    return [{ message: "Not Authorized" }];
  }
}
