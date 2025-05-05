import jwt from "jsonwebtoken";
import { authModel } from "../models/auth.model.mjs";

const admin_middleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(404).json({ message: "Invalid request !!!" });
    }
    const decode_data = jwt.verify(token, process.env.SECRET);
    if (!decode_data) {
      return res.status(402).json({ message: "Session expired" });
    }
    const user_check = await authModel.findOne({ _id: decode_data?._id });
    if (!user_check || user_check?.role !== "admin") {
      return res.status(401).json({ message: "Invalid request !!" });
    }
    req.user = user_check?._id;
    next();
  } catch (error) {
    console.log("error =>", error);
    res.status(402).json({ message: "Unauthorize user request" });
  }
};

export { admin_middleware };
