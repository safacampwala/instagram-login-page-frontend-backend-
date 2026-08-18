const bcrypt = require("bcrypt");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Login API
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  // Demo user for testing
  const demoUsername = "testuser";
  const demoPasswordHash =
    "$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy";

  if (username !== demoUsername) {
    return res.status(401).json({
      success: false,
      message: "Invalid username or password",
    });
  }

  const passwordMatch = await bcrypt.compare(
    password,
    demoPasswordHash
  );

  if (!passwordMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid username or password",
    });
  }

  res.json({
    success: true,
    message: "Login successful!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
