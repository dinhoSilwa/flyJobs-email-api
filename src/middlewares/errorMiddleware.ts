import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { CustomApiError, NotFound, NotFoundNodemailer } from "../erros/customsErrorsApi";
interface ErrorHandlerMiddlewareType {
  error: Error & CustomApiError;
  req: Request;
  res: Response;
  message: string;
  next: NextFunction;
}
export const ErrorHandlerMiddleware: ErrorRequestHandler = ({
  error,
  req,
  res,
  message,
  next,
}: ErrorHandlerMiddlewareType): any => {
  const statusCode = error.statusCode ? error.statusCode : 500;
  message: error.message ? error.message : "Internal Server Error";

  if (error instanceof NotFound) {
    return res.status(error.statusCode).json({
      error: {
        status: statusCode,
        message: message,
      },
    });
  }

  if(error instanceof NotFoundNodemailer){
    return res.status(error.statusCode).json({
      error : {
        status : statusCode,
        message : message
      }
    })
  }

  return res.status(statusCode).json({
    error: {
      statusCode: statusCode,
      message: message,
      ...(process.env.Node_env === "development" && {
        stack: error.stack,
      }),
    },
  });
};
