const { Router } = require("express");
const routerTask = require('./tasks')

const router = Router()

router.use('/tasks', routerTask)

  module.exports = router