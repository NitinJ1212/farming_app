import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

// Routes



app.use("/", userRoutes);

export default app;
