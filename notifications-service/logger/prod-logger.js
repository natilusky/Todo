import pkg from 'winston'
const {format, createLogger, transports} = pkg
const { timestamp, combine, errors, json } = format

function buildProdLogger() {
  return createLogger({
    format: combine(timestamp({format:`DD/MM/YYYY HH:mm:ss`}), errors({ stack: true }), json()),
    transports: [ new transports.File({ filename: 'logger.log' } )]
  });
}

export default buildProdLogger;