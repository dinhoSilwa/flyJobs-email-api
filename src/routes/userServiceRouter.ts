import { Router } from "express";
import { UserServiceController } from "../controllers/UserServiceController";
import { zodMiddleware } from "../middlewares/validateMiddleware";
import { UserServiceSchema } from "../schema/UserServiceSchema";

export const userServiceRouter = Router();
userServiceRouter.post(
  "/send/service",
  zodMiddleware(UserServiceSchema),
  UserServiceController.startSendEmailService,
);

userServiceRouter.get("/services", UserServiceController.getAllServices);
