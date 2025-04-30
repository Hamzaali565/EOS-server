import { Router } from "express";
import { excel_request } from "../controllers/excel_request.controller.mjs";

const router = Router();

router.route("/api/v1/excel_request").post(excel_request);

export default router;
