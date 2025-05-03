import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const auth_schema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    product_list: { type: Boolean, default: true },
    advantia_list: { type: Boolean, default: false },
    integra_list: { type: Boolean, default: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

auth_schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

auth_schema.methods.generateToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.SECRET,
    {
      expiresIn: "1d",
    }
  );
};

auth_schema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const authModel = model("user", auth_schema);

export { authModel };
