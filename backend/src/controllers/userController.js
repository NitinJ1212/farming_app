import User from "../models/userModel.js";

// --------------------------
// Register User
// --------------------------
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
console.log(name, email, password, phone);

    if (!name || !email || !password  || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const user = await User.create({ name, email, password, phone });
    const token = user.generateJWT();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: user.profile,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// --------------------------
// Login User
// --------------------------
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = user.generateJWT();

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: user.profile,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// --------------------------
// Get Profile (Protected)
// --------------------------
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
console.log(user,"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");

    res.status(200).json({ profile: user.profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const addAddress = async (req, res) => {
  try {
  // e.g., /users/:userId/address
    const { label, name, phone, street, city, state, postalCode, country } = req.body;

    if (!name || !phone || !street || !city || !state || !postalCode || !country) {
      return res.status(400).json({ message: "All address fields are required" });
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Create new address object
    const newAddress = {
      label: label || "Home",
      name,
      phone,
      street,
      city,
      state,
      postalCode,
      country,
    };

    // Push new address to user.addresses
    user.addresses.push(newAddress);
    await user.save();

    return res.status(201).json({
      message: "Address added successfully",
      addresses: user.addresses,
    });
  } catch (error) {
    console.error("Add Address Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------------------
// OPTIONAL: GET ALL ADDRESSES
// ------------------------------
export const getAddresses = async (req, res) => {
  try {
 
    const user = await User.findById(req.user.id).select("addresses");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ addresses: user.addresses });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------------------
// OPTIONAL: DELETE ADDRESS
// ------------------------------
export const deleteAddress = async (req, res) => {
  try {
    const { userId, addressId } = req.user;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.addresses = user.addresses.filter(
      (addr, index) => index.toString() !== addressId
    );

    await user.save();
    res.status(200).json({ message: "Address removed", addresses: user.addresses });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};