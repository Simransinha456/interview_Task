const User = require("../Model/user.js");
const express = require('express');
const router = express.Router();

router.get("/api/v1/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        Success: false,
        Data: null,
        Error: "User not found",
      });
    }
    return res.json({
      Success: true,
      Data: {
        name: user.name,
        email: user.email,
      },
      Error: null,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      Success: false,
      Data: null,
      Error: "Internal Server Error",
    });
  }
});

module.exports = router;