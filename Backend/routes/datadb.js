const express = require('express');
const router  = express.Router();

const { services, userservice } = require('../controllers/datadb')

router.route("/services/:category").get(services);
router.route("/userservice/:id").get(userservice);
module.exports = router;