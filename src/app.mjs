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
      "https://eos-ltd.com",
      "http://eos-ltd.com",
    ],
  })
);
app.use(express.json());

app.use(list_routes);
app.use(auth_routes);
export { app };
