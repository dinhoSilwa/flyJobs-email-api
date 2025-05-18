import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { CustomApiError, NotFoundNodemailer } from "../erros/customsErrorsApi";
import { httpStatusCode } from "../httpStatus/httpStatusCode";

export const ErrorHandlerMiddleware: ErrorRequestHandler = (
  error: Error & CustomApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  if (error instanceof NotFoundNodemailer) {
    res.status(error.statusCode).json({
      success: false,
      error: {
        code: error.statusCode,
        message: error.message,
        details: process.env.NODE_ENV === "development" ? error.stack : null,
      },
    });
  }
  
  const response = {
    success: false,
    error: {
      code: statusCode,
      message: error.message || "Erro interno",
      details: process.env.NODE_ENV === "development" ? error.stack : null,
    },
  };
  res.status(statusCode).json(response);
};
