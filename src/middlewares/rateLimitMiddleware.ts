import { Request, Response, NextFunction } from "express";
import rateLimit, { Options } from "express-rate-limit";
import { RateExpires } from "../erros/customsErrorsApi";

export const createRateLimitMiddleware = (
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
      next(new RateExpires(message));
    },
  });
};

export const serviceRateLimite = createRateLimitMiddleware(
  10 * 60 * 10000,
  5,
  "Falha ao Requisitar Serviços"
);
