const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters long." });
  }

  try {
    const token = await UserModel.createUser(username, email, password);
    res.status(201).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findByUsername(username);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isMatch = await UserModel.validatePassword(user, password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = UserModel.generateToken(user);
        res.json({ username: user.username, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
