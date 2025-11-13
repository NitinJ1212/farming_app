import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import cors from "cors"; // ✅ import CORS

dotenv.config();
connectDB();

const app = express();

// ✅ Enable CORS for frontend running on port 3001
app.use(
  cors({
    origin: "http://localhost:3001", // your React app
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // if you send cookies or auth headers
  })
);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

// Routes
app.use("/", userRoutes);
app.use("/product", productRoutes);

export default app;
