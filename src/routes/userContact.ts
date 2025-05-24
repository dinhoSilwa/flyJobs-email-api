import { Router } from "express";
import { zodMiddleware } from "../middlewares/validateMiddleware";
import { userContactSchema } from "../schema/UserContact";
import { UserContactController } from "../controllers/UserContactController";

export const UserContactRouter = Router();

UserContactRouter.post(
  "/send/contact",
  zodMiddleware(userContactSchema),
  UserContactController.startSendContactEmail,
);
