const express = require("express");
const connectDB = require("./config/db");
const healthRoutes = require("./routes/health.routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Routes
app.use("/health", healthRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
