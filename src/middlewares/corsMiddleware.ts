import { CorsOptions } from "cors";
import { config } from "dotenv";
config();

const { FRONT_END_ORIGIN } = process.env;
export const corsOptions: CorsOptions = {
  origin: FRONT_END_ORIGIN,
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type", "Application/json"],
};
