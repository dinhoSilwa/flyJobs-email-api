import { Request, Response, NextFunction } from "express";
import rateLimit, { Options } from "express-rate-limit";

const createRateLimitMiddleware = (
  windowMs: number,
  max: number,
  message: string
) => {
  return rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (
      req: Request,
      res: Response,
      next: NextFunction,
      options: Options
    ) => {
      next(new Error(message));
    },
  });
};

export const serviceRateLimite = createRateLimitMiddleware(
  10 * 60 * 10000,
  5,
  "Falha ao Requisitar Serviços"
);
