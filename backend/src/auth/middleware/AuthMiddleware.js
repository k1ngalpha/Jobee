import jwt from "jsonwebtoken";

const verifyToken = async (req, res) => {
  const token = req.cookies["token"];
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_TOKEN);
    req.userId = decode.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "unauthorized" });
    console.log("Token errot");
  }
};
