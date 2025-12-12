const mongoose = require("mongoose");

const electronicsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: String,
    price: Number,
    category: String,
    stock: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("knwDBElectronics", electronicsSchema);
