import { authModel } from "../models/auth.model.mjs";

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (![username, email, password].every(Boolean)) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const existingUser = await authModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const user = new authModel({ username, email, password });
    await user.save();
    res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { signUp };
