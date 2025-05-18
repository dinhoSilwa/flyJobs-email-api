import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { CustomApiError } from "../erros/customsErrorsApi";

export const ErrorHandlerMiddleware: ErrorRequestHandler = (
  error: Error & CustomApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
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
