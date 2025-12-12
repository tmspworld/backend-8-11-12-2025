const Electronics = require("../models/Electronics");

// @desc Add new electronic item
exports.createItem = async (req, res) => {
  try {
    const item = await Electronics.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Electronics.find();
    res.json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc Get single item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Electronics.findById(req.params.id);
    if (!item)
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });

    res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc Update item
exports.updateItem = async (req, res) => {
  try {
    const item = await Electronics.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!item)
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });

    res.json({ success: true, data: item });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc Delete item
exports.deleteItem = async (req, res) => {
  try {
    const item = await Electronics.findByIdAndDelete(req.params.id);
    if (!item)
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });

    res.json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Search by name (partial & case-insensitive)
exports.searchByName = async (req, res) => {
  try {
    const { name } = req.query; // ?name=hp

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name query parameter is required",
      });
    }

    // Case-insensitive search using regex
    const result = await Electronics.find({
      name: { $regex: name, $options: "i" },
    });

    res.status(200).json({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
