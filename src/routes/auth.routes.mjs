import { Router } from "express";
import { signUp } from "../controllers/auth.controller.mjs";

const router = Router();

router.route("/api/v1/signup").post(signUp);

export default router;
