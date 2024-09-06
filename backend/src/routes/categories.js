const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categories");
const {protect} = require("../middleware/authMiddleware");


/* Create */

router.post("/", protect, (req, res) => {
  categoryController.createCategory(req, res);
});

/* Read */

router.get("/", (req, res) => {
  categoryController.getCategories(req, res);
});

router.get("/:id", (req, res) => {
  categoryController.getCategoryById(req, res);
});

/* Update */

router.put("/:id", protect, (req, res) => {
  categoryController.updateCategoryByID(req, res);
});

/* Delete */

router.delete("/:id", protect, (req, res) => {
  categoryController.deleteCategoryByID(req, res);
});

module.exports = router;