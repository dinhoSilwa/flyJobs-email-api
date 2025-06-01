import { CorsOptions } from "cors";

const allowedOrigins = [
  "https://flyjobs-ten.vercel.app",
  "https://flyjobs-rh-consulting.vercel.app",
  "http://localhost:3000",
  "http://localhost:5173",
];

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      const errorMsg = `A origem '${origin}' não é permitida pelo CORS`;
      return callback(new Error(errorMsg), false);
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};
