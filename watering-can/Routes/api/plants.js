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

router.route("/api/plants")
    .get(plantsController.findAll)
    .post(plantsController.create);
module.exports = router;