import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { CustomApiError, NotFoundNodemailer } from "../erros/customsErrorsApi";

export const ErrorHandlerMiddleware: ErrorRequestHandler = (
  error: Error & CustomApiError,
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const statusCode = error.statusCode || 500;
  if (error instanceof NotFoundNodemailer) {
    return res.status(error.statusCode).json({
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
  return res.status(statusCode).json(response);
};
