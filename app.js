// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock product data
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Wireless Mouse', price: 29.99 },
  { id: 3, name: 'USB-C Cable', price: 12.99 },
  { id: 4, name: 'Mechanical Keyboard', price: 149.99 },
  { id: 5, name: 'Monitor Stand', price: 49.99 },
  { id: 6, name: 'Webcam 4K', price: 89.99 }
];

// GET /api/products - Return all products
app.get('/api/products', (req, res) => {
  try {
    // Simulate a slight delay to demonstrate loading state
    setTimeout(() => {
      res.status(200).json({
        success: true,
        data: products,
        message: 'Products fetched successfully'
      });
    }, 500);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching products'
    });
  }
});

// GET /api/products/:id - Return a single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: product
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
