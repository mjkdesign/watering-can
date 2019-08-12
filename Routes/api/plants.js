const router = require("express").Router();
const plantsController = require("../../controllers/Plantcontroller");

router.route("/")
    .get(plantsController.findAll)
    .post(plantsController.create);

router
    .route("/:id")
    .get(plantsController.findById)
    .put(plantsController.update)
    .delete(plantsController.remove);

module.exports = router;