import { model, Schema } from "mongoose";

const listSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  part_number: { type: String },
  sales_price: { type: String, required: true },
  advantia_price: { type: String },
  integra_price: { type: String },
  free_stock: { type: Number, required: true },
  printer_model: { type: String },
  status: { type: Boolean, default: true }
});

const listModel = model("listModel", listSchema);

export { listModel };
