import { Router } from "express";
import {
  login_user,
  logout_user,
  signUp,
} from "../controllers/auth.controller.mjs";

const router = Router();

router.route("/api/v1/signup").post(signUp);
router.route("/api/v1/login").post(login_user);
router.route("/api/v1/logout").post(logout_user);

export default router;
