import { Router } from "express";
import { UserServiceController } from "../controllers/UserServiceController";

export const userServiceRouter = Router();
userServiceRouter.post(
  "/send/service",
  UserServiceController.startSendEmailService
);
