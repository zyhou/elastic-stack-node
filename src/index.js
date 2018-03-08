const apm = require('elastic-apm-node').start({
    serviceName: 'api-node',
    secretToken: '',
    serverUrl: 'http://localhost:8200',
});
const connect = require('connect')
const app = require('express')();
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

app.get('/', (req, res) => {
    logger.info('hello world!');
    throw new Error('Ups, something broke!');
});

app.use(apm.middleware.connect())

app.listen(3000);
