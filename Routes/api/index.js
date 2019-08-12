const router = require("express").Router();
const plantRoutes = require("./plants");

router.use("/plants", plantRoutes);

module.exports = router;