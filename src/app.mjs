import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import list_routes from "./routes/list.routes.mjs";
import auth_routes from "./routes/auth.routes.mjs";
import excel_routes from "./routes/excel_request.routes.mjs";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "https://eos-ltd.com",
//       "http://eos-ltd.com",
//       "https://www.eos-ltd.com",
//       "http://www.eos-ltd.com",
//       "https://landing-page-for-practice.vercel.app",
//     ],
//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(cookieParser());
app.use(list_routes);
app.use(auth_routes);
app.use(excel_routes);
export { app };
