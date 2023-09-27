import { CustomError } from "./customError";

export class RequireAuth extends CustomError {
  statusCode = 401;
  constructor() {
    super();
    Object.setPrototypeOf(this, RequireAuth.prototype);
  }

  output() {
    return [{ message: "You have no access" }];
  }
}
