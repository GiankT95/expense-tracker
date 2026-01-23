const express = require("express");
require("dotenv").config(); // ⬅️ ESTO DEBE IR ARRIBA
const connectDB = require("./config/db");
const healthRoutes = require("./routes/health.routes");

const app = express();
const PORT = process.env.PORT || 4000;

connectDB(); // ⬅️ se ejecuta DESPUÉS de dotenv

app.use(express.json());
app.use("/health", healthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
