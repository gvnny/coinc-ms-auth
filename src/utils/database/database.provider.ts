import * as mongoose from 'mongoose';
import 'dotenv/config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(`${process.env.DB_CONN_STRING}`),
  },
];
