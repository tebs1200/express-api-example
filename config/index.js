var convict = require('convict');

// Define a schema
var conf = convict({
    env: {
        doc: "The applicaton environment.",
        format: String,
        default: "development",
        env: "ENV"
    },
    port: {
        doc: "The port to bind.",
        format: "port",
        default: 3000
    },
    logLevel: {
        doc: "The log level",
        format: ["ALL", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "OFF"],
        default: "TRACE"
    }
});

// Load environment dependent configuration
var env = conf.get('env');
conf.loadFile('./config/' + env + '.json');

// Perform validation
conf.validate({strict: true});

module.exports = conf;