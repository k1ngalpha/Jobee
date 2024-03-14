import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/userModel.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let existingUseremail = await User.findOne({ email });
    if (existingUseremail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    let existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("/sign-up error", error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const validuser = await User.findOne({ email });
    if (!validuser) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, validuser.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const token = jwt.sign({ userId: validuser.id }, process.env.JWT_TOKEN, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400000,
    });

    res.status(200).json({ message: "Sign in successful" });
  } catch (error) {
    console.error("Signin error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
