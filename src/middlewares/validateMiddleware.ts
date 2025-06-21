import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import { zodFormatError } from "../utils/zodFormatError";
import { ZodErrors } from "../errors/customsErrorsApi";

export const zodMiddleware = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      throw new ZodErrors(zodFormatError(result.error.issues));
    }
    req.validate = result.data;
    next();
  };
};
