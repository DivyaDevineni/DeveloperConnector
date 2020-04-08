const express = require("express");
const connectDB = require("./config/db");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const app = express();

//connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API running");
});

//Define Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/auth", auth);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
