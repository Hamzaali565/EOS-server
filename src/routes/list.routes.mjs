import { Router } from "express";
import {
  create_list,
  create_many,
  get_data,
  update_many,
} from "../controllers/list.controller.mjs";

const router = Router();

router.route("/api/v1/list").post(create_list);
router.route("/api/v1/list").post(create_many);
router.route("/api/v1/list").get(get_data);
router.route("/api/v1/list").put(update_many);

export default router;
