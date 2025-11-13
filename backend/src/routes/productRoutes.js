import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { createDummyProducts } from "../controllers/productController.js";

const router = express.Router();

// Public routes
router.post("/addproducts",protect, createDummyProducts);

export default router;
