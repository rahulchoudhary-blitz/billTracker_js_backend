const router = require('express').Router();
const external = require('./external');
const internal = require('./internal');

router.use('/external', external);
router.use('/internal', internal);

module.exports = router;
