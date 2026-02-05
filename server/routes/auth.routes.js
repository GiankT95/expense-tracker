const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/auth.controller");
const protect = require("../middleware/auth.middleware");

router.post("/register", register);
router.post("/login", login);

router.get("/me", protect, (req, res) => {
  res.json({
    message: "You are authenticated",
    userId: req.user.id,
  });
});

module.exports = router;
