/**
 * This is an abstract class of how operational errors should be
 * It must have an output which returns an array of errors
 *  @ statusCode - this indicate the status code
 *  @ output - this is the serialized error message
 */

export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor() {
    super();
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract output(): { message: string }[];
}
