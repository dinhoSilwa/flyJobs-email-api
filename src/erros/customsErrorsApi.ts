import { httpStatusCode } from "../httpStatus/httpStatusCode";

export class CustomApiError extends Error {
  public statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFound extends CustomApiError {
  constructor(message: string) {
    super(message, httpStatusCode.NOT_FOUND);
  }
}

export class InvalidRecipient extends CustomApiError {
  constructor(message: string) {
    super(message, httpStatusCode.INVALID_RECIPIENT);
  }
}

export class NotFoundNodemailer extends CustomApiError {
  constructor(message : string){
    super(message, httpStatusCode.NOT_FOUND)
  }
}

export class NotFoundResend extends CustomApiError {
  constructor(message : string){
    super(message, httpStatusCode.NOT_FOUND)
  }
}
