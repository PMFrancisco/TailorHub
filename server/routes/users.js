const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");
const authenticateToken = require("../middleware/authenticateToken");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters long." });
  }

  try {
    const token = await UserModel.createUser(username, email, password);
    res.status(201).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await UserModel.validatePassword(user, password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = UserModel.generateToken(user);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });
    res.json({ username: user.username, email: user.email, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/user", authenticateToken, async (req, res) => {
  try {
    const user = await UserModel.findByEmail(req.user.email);
    res.json({ username: user.username, email: user.email, user: user.favorites });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user data" });
  }
});

router.post("/logout", authenticateToken, async (req, res) => {
  try {
    res.clearCookie("token");

    res.json({ message: "Sesión cerrada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al cerrar sesión" });
  }
});

router.post("/favorites/toggle", authenticateToken, async (req, res) => {
  const username = req.user.username;
  const { restaurantId } = req.body;

  try {
      let users = await UserModel.readUsers();
      let user = users.find(user => user.username === username);
      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }

      const index = user.favorites.indexOf(restaurantId);
      if (index === -1) {
          user.favorites.push(restaurantId);
      } else {
          user.favorites.splice(index, 1);
      }

      const updatedUsers = users.map(u => {
        if (u.username === username) {
          return {...u, favorites: user.favorites};
        }
        return u;
      });

      await UserModel.writeUsers(updatedUsers); 
      res.json({ favorites: user.favorites });
  } catch (error) {
      console.error("Error managing favorites", error);
      res.status(500).json({ error: "Error managing favorites", details: error.message });
  }
});




module.exports = router;
