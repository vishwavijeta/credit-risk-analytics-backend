const express = require('express');
const cors = require('cors');
const app = express();
const customerRoutes = require('./routes/customers');

const PORT = process.env.PORT || 5005;

// ✅ Allow any origin (useful for local dev)
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());
app.use('/api/customers', customerRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
