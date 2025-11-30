import winston from 'winston'


//configuration
const logger = winston.createLogger({
    level:'info',
    format:winston.format.json(),
    //medium of the logs
    transports:[
        new winston.transports.Console(),
        //inlog file
        new winston.transports.File({filename:'app.log'}),
    ]
})


export default logger;



//usage eg

logger.info('Application started')
logger.error('An error occurred')