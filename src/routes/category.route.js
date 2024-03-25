const express = require("express")
const { getCategoryList, getSingleCategoryById, deleteCategoryById, createCategory } = require("../middlewares/category.middlewares")
const router = express.Router()

router.route("/").get(getCategoryList).post(createCategory)
router.route("/:id").get(getSingleCategoryById).delete(deleteCategoryById)

module.exports = router