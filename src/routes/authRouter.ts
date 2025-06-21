import { Router } from "express";
import { UserAuthController } from "../controllers/AuthController";
import { zodMiddleware } from "../middlewares/validateMiddleware";
import { userAuthLoginSchema, userAuthSchema } from "../schema/UserAuthSchema";
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
