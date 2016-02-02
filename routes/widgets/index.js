var router = require('express').Router();

router.get('/', function(req, res) {
    req.app.locals.logger.trace('Request for ' + req.originalUrl);

    res.type('json');
    res.json({hello: "world"});
});

module.exports = router;