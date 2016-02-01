var router = require('express').Router();

router.use('/widgets', require('./widgets'));

module.exports = router;