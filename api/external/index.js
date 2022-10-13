const router = require('express').Router();

const apiControllerData = require('./ApiController');
const fileController = require('./FileController');

router.use('/apidata', apiControllerData);
router.use('/', fileController);

module.exports = router;
