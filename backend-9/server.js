const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const electronicsRoutes = require("./routes/electronicsRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// API Routes
app.use("/api/electronics", electronicsRoutes);

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
