import mongoose from "mongoose";

// ---------------------------
// Review Schema (Subdocument)
// ---------------------------
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
  },
  { timestamps: true, _id: false }
);

// ---------------------------
// Product Schema
// ---------------------------
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      min: 0,
    },
    category: {
      type: String,
      required: [true, "Please select category"],
      trim: true,
    },
    brand: { type: String },
    stock: {
      type: Number,
      required: [true, "Please enter stock quantity"],
      min: 0,
    },
    images: [
      {
        url: { type: String, required: true },
        public_id: { type: String }, // optional if using Cloudinary
      },
    ],
    ratings: {
      type: Number,
      default: 0, // average star rating
      min: 0,
      max: 5,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [reviewSchema],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// ---------------------------
// Helper Method: Update rating
// ---------------------------
productSchema.methods.updateAverageRating = function () {
  if (this.reviews.length === 0) {
    this.ratings = 0;
    this.numOfReviews = 0;
  } else {
    const total = this.reviews.reduce((acc, item) => acc + item.rating, 0);
    this.ratings = total / this.reviews.length;
    this.numOfReviews = this.reviews.length;
  }
};

// ---------------------------
// Export Model
// ---------------------------
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
