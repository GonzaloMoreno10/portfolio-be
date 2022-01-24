export const log4jsConfig = {
  appenders: {
    fileConsoleLogger: { type: 'console' },
  },
  categories: {
    default: { appenders: ['fileConsoleLogger'], level: 'info' },
  },
};
