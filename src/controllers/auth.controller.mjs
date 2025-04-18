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
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login_user = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const user_check = await authModel.findOne({ email });
    if (!user_check) return res.status(404).json({ message: "User not found" });
    const isMatch = await user_check.checkPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect Password" });
    const token = await user_check.generateToken();
    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    res
      .status(200)
      .cookie("token", token, options)
      .json({
        message: "Login Successfully",
        data: {
          username: user_check.username,
          role: user_check?.role,
          email: user_check?.email,
          token,
        },
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const logout_user = async (req, res) => {
  try {
    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    return res
      .status(200)
      .clearCookie("Token", options)
      .send({ message: "Logout successfull" });
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log("Error", error);
  }
};
export { signUp, login_user, logout_user };
