import express, { Application, Request, Response } from "express";
import cors from "cors";

import { config } from "dotenv";
import { corsOptions } from "./middlewares/corsMiddleware";
import { serviceRateLimite } from "./middlewares/rateLimitMiddleware";
import { userServiceRouter } from "./routes/userEmailRoutes";
import { ErrorHandlerMiddleware } from "./middlewares/errorMiddleware";
import { UserContactRouter } from "./routes/userContact";
export const app: Application = express();
config();
app.set("trust proxy", 1);
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", serviceRateLimite, userServiceRouter);
app.use("/api", serviceRateLimite, UserContactRouter);

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", msg: "Api Funcionando Normalmente" });
});
app.use(ErrorHandlerMiddleware);
