var express = require('express'),
    logger = require('log4js').getLogger(),
    config = require('./config/index.js');

var app = express();
logger.setLevel(config.get('logLevel'));

app.locals.config = config;
app.locals.logger = logger;

app.use('/', require('./routes'));

app.use(function(req, res) {
    logger.warn('Request for \'' + req.url + '\' resulted in 404.');
    res.status(404).send('Sorry cant find that!');
});

app.listen(config.get('port'), function() {
    logger.info('Example app listening on port 3000!');
});

module.exports = app;