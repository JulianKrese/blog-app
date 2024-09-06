const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");

const { protect } = require("../middleware/authMiddleware");
const { upload } = require("../middleware/multer");

const logMiddleware = (req, res, next) => {
  ("I am a middleware");
  (req.bogy);
  next();
};

/**
 * POST /blogs
 */
router.post("/", logMiddleware, protect, upload.single("image"), (req, res) => {
  blogController.createBlogs(req, res);
});

/**
 * GET /blogs
 */
router.get("/", (req, res) => {
  blogController.getBlogs(req, res);
});

/**
 * Get blogs by blogID
 * GET /blogs/:id
 */
router.get("/:id", (req, res) => {
  blogController.getBlogById(req, res);
});

/**
 * Get blogs by categoryID
 * GET /blogs/categories/:id
 */
router.get("/categories/:id", (req, res) => {
  blogController.getBlogsByCategoryID(req, res);
});

/**
 * Get blogs by authorId
 * GET /blogs/author/:id
 */
router.get("/author/:id", (req, res) => {
  blogController.getBlogsByAuthorID(req, res);
});

/**
 * Put /blogs/
 */
router.put("/:id", protect, upload.single("image"), (req, res) => {
  blogController.updateBlogByID(req, res);
});

/**
 * DELETE /blogs/
 */
router.delete("/:id", protect, (req, res) => {
  blogController.deleteBlogByID(req, res);
});

module.exports = router;