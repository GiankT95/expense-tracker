const mongoose = require("mongoose");
require("dotenv").config();

const User = require("../models/User");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await User.create({
    email: "test@test.com",
    password: "123456",
  });

  console.log("User created");
  process.exit();
});
