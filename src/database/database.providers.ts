import { createConnection } from 'typeorm';
import { User } from '../user/entitiy/user.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'james',
        password: 'password',
        database: 'test',
        entities: [User],
        synchronize: true,
      }),
  },
];
