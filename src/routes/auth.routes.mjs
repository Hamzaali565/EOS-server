import { Router } from "express";
import {
  acknowlege_user,
  in_active_users,
  login_user,
  logout_user,
  signUp,
} from "../controllers/auth.controller.mjs";

const router = Router();

router.route("/api/v1/signup").post(signUp);
router.route("/api/v1/login").post(login_user);
router.route("/api/v1/logout").post(logout_user);
router.route("/api/v1/in_active_users").get(in_active_users);
router.route("/api/v1/acknowledge_user").put(acknowlege_user);

export default router;
