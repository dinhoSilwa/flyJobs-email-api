import { ZodIssue } from "zod";
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

export class EmailError extends CustomApiError {
  constructor(message: string) {
    super(message, httpStatusCode.UNAUTHORIZED);
  }
}

export class RateExpires extends CustomApiError {
  constructor(message: string) {
    super(message, httpStatusCode.UNAUTHORIZED);
  }
}

export class ZodErrors extends CustomApiError {
  constructor(
    public ErrorObject: ZodIssue[],
    message = `${ErrorObject}`,
  ) {
    super(message, httpStatusCode.UNAUTHORIZED);
  }
}
