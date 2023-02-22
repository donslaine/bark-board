const express = require("express");
// const path = require("path");
const logger = require("morgan");
const cors = require('cors');

require("dotenv").config();

require("./config/database");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:3000` }))

// app.use(express.static(path.join(__dirname, "build")));
// importing the checkToken middleware
app.use(require("./config/checkToken"));

// API routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/users/login", require("./routes/api/users"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/myboard", require("./routes/api/posts"));
app.use("/api/posts/index", require("./routes/api/posts"));
app.use("/api/comments", require("./routes/api/comments"));

// app.get("/*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(PORT, () => {
	console.log(`Express app running on port ${PORT}`);
});
