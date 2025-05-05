import { Router } from "express";
import {
  create_list,
  create_many,
  get_data,
  update_many,
} from "../controllers/list.controller.mjs";
import { admin_middleware } from "../middleware/admin.middleware.mjs";

const router = Router();

router.route("/api/v1/list").post(admin_middleware, create_list);
router.route("/api/v1/list").post(admin_middleware, create_many);
router.route("/api/v1/list").get(get_data);
router.route("/api/v1/list").put(admin_middleware, update_many);

export default router;
