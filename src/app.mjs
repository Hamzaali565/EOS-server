import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import list_routes from "./routes/list.routes.mjs";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());

app.use(list_routes);
export { app };
