import { Router } from "express";
import {
  acknowlege_user,
  in_active_users,
  login_user,
  logout_user,
  paginated_users,
  signUp,
  spec_user,
  update_visible_list,
} from "../controllers/auth.controller.mjs";
import { user_middleware } from "../middleware/user.middleware.mjs";

const router = Router();

router.route("/api/v1/signup").post(signUp);
router.route("/api/v1/login").post(login_user);
router.route("/api/v1/logout").post(logout_user);
router.route("/api/v1/in_active_users").get(in_active_users);
router.route("/api/v1/acknowledge_user").put(acknowlege_user);
router.route("/api/v1/page_user").get(paginated_users);
router.route("/api/v1/visible_list").put(update_visible_list);
router.route("/api/v1/spec_user").get(user_middleware, spec_user);

export default router;
