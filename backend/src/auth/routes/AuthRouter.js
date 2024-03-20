import express from "express";

import { signin, signup } from "../controller/authController.js";
import { userSignin, userSignup } from "../controller/userController.js";

const router = express.Router();

//api/auth/admin
router.post("/admin/sign-up", signup);
router.post("/admin/sign-in", signin);

router.post("/user/user-signup", userSignup);
router.post("/user/user-signin", userSignin);

export default router;
