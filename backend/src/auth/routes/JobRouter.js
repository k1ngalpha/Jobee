import express from "express";
import { addListing } from "../../controller/jobController.js";

const router = express.Router();

router.post("/add-listing", addListing);

export default router;
