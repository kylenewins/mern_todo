const router = require("express").Router()
const itemRoutes = require("./items")

//possibility of pulling in multiple endpoints 
router.use("/items", itemRoutes)

module.exports = router