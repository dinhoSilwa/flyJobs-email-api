import express, { Application, Request, Response } from "express";
import cors from "cors";

import { config } from "dotenv";
import { corsOptions } from "./middlewares/corsMiddleware";
import { serviceRateLimite } from "./middlewares/rateLimitMiddleware";
import { userServiceRouter } from "./routes/userServiceRouter";
import { ErrorHandlerMiddleware } from "./middlewares/errorMiddleware";
import { UserContactRouter } from "./routes/userContact";
import { UserAuthRouter } from "./routes/authRouter";
import cookieParser from "cookie-parser";
export const app: Application = express();
config();
app.set("trust proxy", 1);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api", serviceRateLimite, userServiceRouter);
app.use("/api", serviceRateLimite, UserContactRouter);
app.use("/api/auth", UserAuthRouter);
app.use("api/auth/me", UserAuthRouter);
app.use("api/auth/disconected", UserAuthRouter);

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", msg: "Api Funcionando Normalmente" });
});
app.use(ErrorHandlerMiddleware);
