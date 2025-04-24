import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import list_routes from "./routes/list.routes.mjs";
import auth_routes from "./routes/auth.routes.mjs";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://eos-ltd.com",
      "http://eos-ltd.com",
      "https://www.eos-ltd.com",
      "http://www.eos-ltd.com",
      "https://landing-page-for-practice.vercel.app",
    ],
  })
);
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));

app.use(list_routes);
app.use(auth_routes);
export { app };
