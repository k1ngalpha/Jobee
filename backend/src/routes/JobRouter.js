import express from "express";
import {
  addListing,
  allListing,
  listingById,
} from "../controller/jobController.js";

const router = express.Router();

router.post("/add-listing", addListing);
router.get("/all-listing", allListing);
router.get("/:id", listingById);

export default router;
