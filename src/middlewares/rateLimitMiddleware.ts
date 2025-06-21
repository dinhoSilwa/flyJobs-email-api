import { Request, Response, NextFunction } from "express";
import rateLimit, { Options } from "express-rate-limit";
import { RateExpires } from "../errors/customsErrorsApi";

/**
 * Cria um middleware de rate limit padrão
 */
export const createRateLimitMiddleware = (
  windowMs: number,
  max: number,
  message: string,
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
      options: Options,
    ) => {
      next(new RateExpires(message));
    },
  });
};

const ativarRateLimit = process.env.NODE_ENV === "production";

export const serviceRateLimite = ativarRateLimit
  ? createRateLimitMiddleware(
      10 * 60 * 1000, // 10 minutos
      50, // 50 requisições
      "Falha ao Requisitar Serviços",
    )
  : (req: Request, res: Response, next: NextFunction) => next(); // Desativa temporariamente
