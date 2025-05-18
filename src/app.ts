import express, { Application, Request, Response } from "express";
import cors from "cors";
import { corsOptions } from "./middlewares/corsMiddleware";
import { userServiceRouter } from "./routes/userEmailRoutes";
import { ErrorHandlerMiddleware } from "./middlewares/errorMiddleware";
import { serviceRateLimite } from "./middlewares/rateLimitMiddleware";
export const app: Application = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", serviceRateLimite, userServiceRouter);
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", msg: "Api Funcionando Normalmente" });
});
app.use(ErrorHandlerMiddleware);
