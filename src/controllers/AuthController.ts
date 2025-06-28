import { Request, Response } from "express";
import { UseAuthRepository } from "../repositories/UseAuthRepository";
import { UseAuthService } from "../services/UseAuthService";
import { AuthRequest } from "../middlewares/authMiddleware";

const authRepository = new UseAuthRepository();
const authService = new UseAuthService(authRepository);

export class UserAuthController {
  static async createAuth(req: Request, res: Response): Promise<void> {
    await authService.signup(req.body);
    res.status(200).json({ status: "OK", msg: "Email cadastrado com sucesso" });
  }

  static async loginAuth(req: Request, res: Response): Promise<any> {
    const token = await authRepository.login(req.body);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 1,
    });
    res.status(200).json({
      status: "OK",
      msg: "Login realizado com sucesso",
    });
  }

  static authData(req: AuthRequest, res: Response): void {
    const user = req.user;
    res.status(200).json({
      status: "OK",
      msg: "Login realizado com sucesso",
      user,
    });
  }

  static removeAuth(req: Request, res: Response): void {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    console.log("removido");

    res.status(200).json({
      status: "OK",
      msg: "Logout realizado com sucesso",
    });
  }
}
