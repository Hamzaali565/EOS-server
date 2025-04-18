import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import list_routes from "./routes/list.routes.mjs";
import auth_routes from "./routes/auth.routes.mjs";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://www.eos-ltd.com",
      "http://www.eos-ltd.com",
      "https://landing-page-for-practice.vercel.app",
    ],
  })
);
app.use(express.json());

app.use(list_routes);
app.use(auth_routes);
export { app };
