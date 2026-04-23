import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import { fileURLToPath } from "url";

// Load env FIRST before anything else
dotenv.config();

// Import Routes
import { FoodMenu_Routes } from "./src/Routes/Food_menu.js";
import { Restorant_Routes } from "./src/Routes/Restaurant.js";
import { User_Routes } from "./src/Routes/User.js";
import { Order_Routes } from "./src/Routes/Order.js";
import { Review_Routes } from "./src/Routes/Review.js";
import connectDB from "./src/Config/Server.js";
import { Cart_Routes } from "./src/Routes/Cart.js";
import { RestaurantProfile_Routes } from "./src/Routes/RestaurantProfiles.js";
import { Dashboard_Routes } from "./src/Routes/Dashboard.js";
import { OrderReceipte_Routes } from "./src/Routes/downloadOrderReceipt.js";
import { Coupon_Route } from "./src/Routes/CouponCode.js";
import { UserProfile_Routes } from "./src/Routes/UserProfile.js";

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(helmet());

// Setup path variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static files
app.use(
  "/uploads",
  express.static(path.join(__dirname, "src/uploads"), {
    setHeaders: (res) => {
      res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({ 
    message: "Backend Server is Running ✅", 
    status: "success",
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use("/user", User_Routes);
app.use("/userProfile", UserProfile_Routes);
app.use("/dashboard", Dashboard_Routes);
app.use("/receipt", OrderReceipte_Routes);
app.use("/menu", FoodMenu_Routes);
app.use("/coupon", Coupon_Route);
app.use("/restaurunt", Restorant_Routes);
app.use("/order", Order_Routes);
app.use("/review", Review_Routes);
app.use("/cart", Cart_Routes);
app.use("/restauruntProfile", RestaurantProfile_Routes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ 
    message: "Route not found", 
    path: req.path,
    method: req.method 
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(err.status || 500).json({
    message: "Server Error",
    error: process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message,
  });
});

// Connect DB and Start Server
const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();
    console.log("✅ Database connected successfully");
    
    app.listen(PORT, () => {
      console.log(`✅ Server is running on PORT: ${PORT}`);
      console.log(`📍 Local URL: http://localhost:${PORT}`);
      console.log(`🔍 Health Check: http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
})();
