import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/src/**/*.entity.ts'],
  migrations: [__dirname + '/src/migrations/*.ts'],
  ssl: {
    rejectUnauthorized: false,
  },
});
