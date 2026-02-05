require("dotenv").config(); // ⬅️ ESTO DEBE IR ARRIBA

const express = require("express");
const connectDB = require("./config/db");
const healthRoutes = require("./routes/health.routes");

const app = express();
const PORT = process.env.PORT || 4000;

const authRoutes = require("./routes/auth.routes");

connectDB(); // ⬅️ se ejecuta DESPUÉS de dotenv

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
