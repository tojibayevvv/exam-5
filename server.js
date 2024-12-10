const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy data for the cart
let cartItems = [];

// GET /cart - Fetch all cart items
app.get("/cart", (req, res) => {
  res.json(cartItems);
});

// POST /cart - Add an item to the cart
app.post("/cart", (req, res) => {
  const newItem = req.body;
  cartItems.push(newItem);
  res.status(201).json(newItem);
});

// DELETE /cart/:id - Remove an item from the cart
app.delete("/cart/:id", (req, res) => {
  const { id } = req.params;
  cartItems = cartItems.filter((item) => item.id !== id);
  res.status(200).json({ message: "Item removed successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
