const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./database/db");
connectDB();

const blogRoutes = require("./routes/blogs");
const categoryRoutes = require("./routes/categories");
const authRoutes = require("./routes/auth");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);
app.use("/categories", categoryRoutes);
app.use("/auth", authRoutes);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));


app.listen(port, () => {
  (`Example app listening on port ${port}`);
});