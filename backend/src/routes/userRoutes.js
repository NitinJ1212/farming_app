import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  addAddress,
  getAddresses,
  deleteAddress,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route
router.get("/profile", protect, getProfile);

// POST /users/:userId/address → Add new address
router.post("/users/addAddress",protect, addAddress);

// GET /users/:userId/address → Get all addresses
router.get("/users/getaddress", protect, getAddresses);

// DELETE /users/:userId/address/:addressId → Delete one address by index
router.delete("/users/deleteaddressId", protect, deleteAddress);

export default router;
