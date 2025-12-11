// data/seedProducts.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

const sample = [
  { name: "Laptop", price: 50000, category: "Electronics", quantity: 10 },
  { name: "Mouse", price: 500, category: "Electronics", quantity: 50 },
  { name: "Keyboard", price: 700, category: "Electronics", quantity: 40 },
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(sample);
    console.log("Seeded DB");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
