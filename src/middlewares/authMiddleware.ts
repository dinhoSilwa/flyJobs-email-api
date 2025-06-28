import { Request, Response, NextFunction } from "express";
import { TokenManager } from "../utils/TokenManager";
import { UNAUTHORIZED } from "../errors/customsErrorsApi";

export interface AuthRequest extends Request {
  user: any;
}

export const AuthMidleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeadersToken = req.cookies.token;

  if (!authHeadersToken) {
    throw new UNAUTHORIZED("Não autorizado");
  }
  const tokenManager = TokenManager.getInstance();
  const isValidToken = await tokenManager.verifyToken(authHeadersToken);
  console.log("Autorizado");
  req.user = isValidToken;

  if (!isValidToken) {
    throw new UNAUTHORIZED("Não autorizado");
  }
  next();
};
