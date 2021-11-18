const { Router } = require("express")
const categoriesController = require("../controllers/categoriesController")
const router = Router();

router.post("/", categoriesController.create)
router.get("/", categoriesController.listAll)
router.get("/:id", categoriesController.listOne)
router.put("/:id", categoriesController.update)
router.delete("/:id", categoriesController.delete)

module.exports = router