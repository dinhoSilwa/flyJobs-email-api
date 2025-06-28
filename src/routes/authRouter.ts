import { Router } from "express";
import { UserAuthController } from "../controllers/AuthController";
import { zodMiddleware } from "../middlewares/validateMiddleware";
import { userAuthLoginSchema, userAuthSchema } from "../schema/UserAuthSchema";
import { AuthMidleware } from "../middlewares/authMiddleware";
export const UserAuthRouter = Router();

UserAuthRouter.post(
  "/signup",
  zodMiddleware(userAuthSchema),
  UserAuthController.createAuth,
);

UserAuthRouter.post(
  "/login",
  zodMiddleware(userAuthLoginSchema),
  UserAuthController.loginAuth,
);

UserAuthRouter.get("/me", AuthMidleware, UserAuthController.authData);
UserAuthRouter.post("/logout", UserAuthController.removeAuth);
