var router = require('express').Router();

router.get('/', function(req, res) {
    req.app.locals.logger.trace('Request for ' + req.originalUrl);
    res.send('Widgets!');
});

module.exports = router;