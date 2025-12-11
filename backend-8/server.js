// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const productRoutes = require("./routes/productRoutes");

const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:5173" })); // अपना frontend origin दे सकते हैं या '*' during dev
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Basic health route
app.get("/", (req, res) => res.send("Product API is up"));

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✔"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
