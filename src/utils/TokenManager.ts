import { SignJWT, jwtVerify, decodeJwt, JWTPayload } from "jose";
import { configDotenv } from "dotenv";
import {
  BadRequest,
  TokenExpired,
  UNAUTHORIZED,
} from "../errors/customsErrorsApi";

configDotenv();

const SECRET = process.env.JWT_SECRET_KEY as string;

export class TokenManager {
  private static instance: TokenManager;
  private secretKey: Uint8Array;

  private constructor() {
    if (!SECRET) {
      throw new UNAUTHORIZED("Falha ao obter token");
    }
    this.secretKey = new TextEncoder().encode(SECRET);
  }

  public static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }
    return TokenManager.instance;
  }

  public async generateToken(
    payload: JWTPayload,
    expiresIn: string = process.env.NODE_ENV === "production" ? "60s" : "7d",
  ): Promise<string> {
    const now = Math.floor(Date.now() / 1000);

    const jwt = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt(now)
      .setExpirationTime(expiresIn)
      .sign(this.secretKey);

    return jwt;
  }

  public encodeToken(token: string): object {
    return decodeJwt(token);
  }

  public async verifyToken(token: string): Promise<object> {
    try {
      const { payload } = await jwtVerify(token, this.secretKey);
      return payload;
    } catch (err: any) {
      if (err?.code === "ERR_JWT_EXPIRED") {
        throw new TokenExpired("Token expirado.");
      }
      if (err?.code === "ERR_JWS_SIGNATURE_VERIFICATION_FAILED") {
        throw new BadRequest("Token inválido.");
      }
      throw new BadRequest("Erro desconhecido ao verificar token.");
    }
  }
}
