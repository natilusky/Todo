import pkg from 'winston'
const {format, createLogger, transports} = pkg
const {timestamp,combine,printf} = format


function buildDevLogger(){
  const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
  });
   
  return createLogger({
    level: 'info',
    format: combine(
    format.colorize(),
    timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),logFormat),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()]
  });
}

export default buildDevLogger;