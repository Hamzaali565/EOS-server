import { Schema, model } from "mongoose";

const excel_request_schema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    product_detail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const excel_request_model = model("excel request", excel_request_schema);

export { excel_request_model };
