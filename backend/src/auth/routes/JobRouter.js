import express from "express";
import { addListing, allListing } from "../../controller/jobController.js";

const router = express.Router();

router.post("/add-listing", addListing);
router.get("/all-listing", allListing);

export default router;
