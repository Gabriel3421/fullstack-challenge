const { Router } = require("express")
const ordersController = require("../controllers/ordersController")
const router = Router();

router.post("/", ordersController.create)
router.get("/", ordersController.listAll)
router.get("/:id", ordersController.listOne)
router.put("/:id", ordersController.update)
router.delete("/:id", ordersController.delete)

module.exports = router