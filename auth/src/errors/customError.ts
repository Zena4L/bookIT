/**
 * This is an abstract class of how operational errors should be
 * It must have an output which returns an array of errors
 */

export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor() {
    super();
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract output(): { message: string }[];
}
