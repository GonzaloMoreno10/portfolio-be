import { getLogger } from 'log4js';
import server from './server';
const log = getLogger('fileConsoleLogger');

server.listen(server.get('port'), () =>
  log.info(`Server running on PORT: ${server.get('port')} - PID WORKER: ${process.pid}`),
);
