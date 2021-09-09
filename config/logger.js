/* eslint-disable no-shadow */
const winston = require('winston');
const { combine, timestamp, label, printf } = winston.format;
// const CloudWatchTransport = require('winston-aws-cloudwatch');
// const aws = require('aws-sdk');
const nconf = require('nconf');

nconf.env();
// aws.config.update({
//   region: nconf.get('AWS_REGION'),
// });
// winston.emitErrs = true;

const myFormat = printf(({
  level, message, label, timestamp,
}) => `${timestamp} [${label}] ${level} ${message}`);

const logger = winston.createLogger({
  format: combine(
    label({ label: 'Agalabs_infinity' }),
    timestamp(),
    myFormat,
  ),
  transports: [
    /** File transport can also be added */
    new winston.transports.Console({
      level: process.env.LOGGER_LEVEL || 'info',
      handleExceptions: false,
      json: false,
      colorize: true,
    }),
  ],
  exitOnError: false,
});

// if (nconf.get('NODE_ENV') !== 'development') {
//   const options = {
//     logGroupName: nconf.get('LOG_GROUP_NAME'),
//     logStreamName: nconf.get('LOG_STREAM_NAME'),
//     createLogGroup: true,
//     createLogStream: true,
//     submissionInterval: Number(nconf.get('SUBMIT_INTERVAL'), 10),
//     submissionRetryCount: 1,
//     awsConfig: {
//       accessKeyId: nconf.get('IAM_USER_KEY'),
//       secretAccessKey: nconf.get('IAM_USER_SECRET'),
//       region: nconf.get('AWS_REGION'),
//     },
//     formatLog: function (item) {
//       const date = new Date(item._date).toISOString();
//       const meta = (item._meta[0] === 'e' && item._meta[1] === 'r') ? 'error' : 'info';
//       return `${date} :: ${meta} :: ${item._callback}`;
//     },
//   };
//   logger.info(`${JSON.stringify(options)}`);
//   logger.add(CloudWatchTransport, options);
// }

logger.info('LOGGER MADE SUCCESS');

logger.stream = {
  write(message) {
    logger.info(message);
  },
};

module.exports = logger;