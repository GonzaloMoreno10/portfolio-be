import mongoose from 'mongoose';
import { mongoAtlasConfig } from '../constants/venv';
import { getLogger } from 'log4js';

export default function connect() {
  const log = getLogger('fileConsoleLogger');
  try {
    const arg = `mongodb+srv://${mongoAtlasConfig.MONGO_ATLAS_USER}:${mongoAtlasConfig.MONGO_ATLAS_PASSWORD}@cluster0.qvjdz.mongodb.net/${mongoAtlasConfig.MONGO_ATLAS_DB}?retryWrites=true&w=majority`;
    mongoose.connect(arg);
    log.info('Conectado a base de datos mongo Atlas');
  } catch (err) {
    console.log('err');
  }
}
