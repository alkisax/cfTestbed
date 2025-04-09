const winston = require('winston');

const logger = winston.createLogger(
  {
    format: winston.format.json(),
    // που θα αποθηκεύονται τα Logs
    transports: [ 
      new winston.transports.Console()
    ]
  }
)

module.exports = logger;