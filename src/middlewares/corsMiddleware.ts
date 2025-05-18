import { CorsOptions } from "cors";
import { config } from "dotenv";
config();
export const corsOptions: CorsOptions = {
  origin: "*",
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
