import jwt from "jsonwebtoken";
import { authModel } from "../models/auth.model.mjs";

const user_middleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    console.log(token, req.cookies);
    if (!token) {
      return res.status(404).json({ message: "Invalid request !!!" });
    }
    const decode_data = jwt.verify(token, process.env.SECRET);
    if (!decode_data) {
      return res.status(402).json({ message: "Session expired" });
    }
    const user_check = await authModel.findOne({ _id: decode_data?._id });
    if (!user_check) {
      return res.status().json({ message: "Invalid request !!" });
    }
    req.user = user_check?._id;
    next();
  } catch (error) {
    console.log("error =>", error);
    res.status(402).json({ message: "Unauthorize user request" });
  }
};

export { user_middleware };
