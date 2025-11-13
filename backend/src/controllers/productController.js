import Product from "../models/productModel.js";
import User from "../models/userModel.js";

// ------------------------------
// CREATE PRODUCT
// ------------------------------
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, brand, stock, images } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      brand,
      stock,
      images,
      createdBy: req.user?._id || null,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------------------
// GET ALL PRODUCTS
// ------------------------------
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ count: products.length, products });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------------------
// GET PRODUCT BY ID
// ------------------------------
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------------------
// ADD / UPDATE PRODUCT REVIEW
// ------------------------------
export const addProductReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const { productId } = req.params;
    const userId = req.user?._id || req.body.userId; // fallback for testing

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Check if user already reviewed
    const existingReview = product.reviews.find(
      (rev) => rev.user.toString() === userId.toString()
    );

    if (existingReview) {
      // Update existing review
      existingReview.rating = rating;
      existingReview.comment = comment;
    } else {
      // Add new review
      product.reviews.push({
        user: userId,
        name: user.name,
        rating,
        comment,
      });
    }

    // Recalculate average rating
    product.updateAverageRating();
    await product.save();

    res.status(200).json({
      message: "Review added successfully",
      ratings: product.ratings,
      numOfReviews: product.numOfReviews,
      reviews: product.reviews,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------------------
// CREATE DUMMY PRODUCTS (Seeder)
// ------------------------------
export const createDummyProducts = async (req, res) => {
  try {
    const dummyProducts = [
      {
        name: "Hilss Area बकरी",
        description: "The country's varied climate and land types allow for the production",
        price: 139999,
        category: "बकरी",
        brand: "बकरी",
        stock: 25,
        images: [
          { url: "https://media.istockphoto.com/id/181141852/photo/goat.jpg?s=612x612&w=0&k=20&c=oEmgOsdF2a613h-xtECYCRWjE58kjdLZ8gsFo_6lx_4=" }
        ],
      },
      {
        name: "Desi बकरी",
        description: "बकरी के बच्चों को बड़ा करके आसानी से कभी भी बेंचा जा सकता है.",
        price: 84999,
        category: "बकरी",
        brand: "बकरी",
        stock: 15,
        images: [
          { url: "https://media.istockphoto.com/id/146776721/photo/goats.jpg?s=612x612&w=0&k=20&c=z0GrAzkkLYJMAWQGy0Dsc-3y0ZfDWsxxvEu8FMKwy9c=" }
        ],
      },
      {
        name: "Nike ",
        description: "Comfortable running shoes with ZoomX foam for ultimate cushioning.",
        price: 10999,
        category: "Footwear",
        brand: "बकरी",
        stock: 50,
        images: [
          { url: "https://images.livehindustan.com/uploadimage/library/16_9/16_9_1/Goat_And_Sheep_1503855017.jpg" }
        ],
      },
      {
        name: "Desi बकरी",
        description: "he country's varied climate and land types allow for the production",
        price: 67999,
        category: "बकरी",
        brand: "बकरी",
        stock: 12,
        images: [
          { url: "https://media.istockphoto.com/id/174641203/photo/diversity.jpg?s=612x612&w=0&k=20&c=LVELwUlpLMy_vtpUX72XdDbHTF0oAA9zm-2Nic0lULg=" }
        ],
      },
    ];

    // Clear old data (optional)
    await Product.deleteMany();

    // Insert dummy data
    const createdProducts = await Product.insertMany(dummyProducts);

    res.status(201).json({
      message: "4 dummy products created successfully",
      count: createdProducts.length,
      products: createdProducts,
    });
  } catch (error) {
    console.error("Error seeding dummy products:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
