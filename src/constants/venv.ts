import dotenv from 'dotenv';

dotenv.config();

export const mongoAtlasConfig = {
  MONGO_ATLAS_DB: process.env.MONGO_ATLAS_DB,
  MONGO_ATLAS_PASSWORD: process.env.MONGO_ATLAS_PASSWORD,
  MONGO_ATLAS_USER: process.env.MONGO_ATLAS_USER,
};
