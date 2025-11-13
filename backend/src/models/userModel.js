import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const SALT_ROUNDS = 12;

// ---------------------------
// Address Schema
// ---------------------------
const addressSchema = new mongoose.Schema({
  label: { type: String }, // e.g. "Home", "Work"
  name: { type: String },
  phone: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  postalCode: { type: String },
  country: { type: String },
}, { _id: false });

// ---------------------------
// Cart Item Schema
// ---------------------------
const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  variant: { type: String }, // optional SKU or variant
  qty: { type: Number, default: 1, min: 1 },
  priceAtAddition: { type: Number }, // snapshot of price at time of adding
}, { _id: false });

// ---------------------------
// User Schema
// ---------------------------
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    maxlength: 254,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false, // Hide password in queries by default
  },

  role: {
    type: String,
    enum: ["user", "seller", "admin"],
    default: "user",
  },

  phone: { type: String },

  isVerified: {
    type: Boolean,
    default: false,
  },

  addresses: [addressSchema],

  cart: [cartItemSchema],

  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],

  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],

  // Password reset functionality
  resetPasswordToken: { type: String, select: false },
  resetPasswordExpires: { type: Date, select: false },
},
{
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// ---------------------------
// Middleware (Hooks)
// ---------------------------

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// ---------------------------
// Instance Methods
// ---------------------------

// Compare entered password with hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Generate JWT token
userSchema.methods.generateJWT = function () {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not set in environment variables");
  }
  const payload = {
    id: this._id,
    role: this.role,
    email: this.email,
    name: this.name,
  };
  const expiresIn = process.env.JWT_EXPIRES_IN || "7d";
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

// Create password reset token
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour expiry
  return resetToken;
};

// Public profile (virtual)
userSchema.virtual("profile").get(function () {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
     email: this.phone,
    role: this.role,
    isVerified: this.isVerified,
    createdAt: this.createdAt,
  };
});

// Index for faster email lookup
userSchema.index({ email: 1 });

// ---------------------------
// Export Model
// ---------------------------
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
