import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import entities from 'src/entities';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return {
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: +configService.get<number>('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      entities: entities,
      // IMP == entities file which are stored in the local
      // entities: [__dirname + '../entities/*{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      cli: {
        // IMP == here migrationDir is the directory on dist folder where migration files are located after execution of the migration
        migrationsDir: __dirname + 'src/migrations/migrations',
      },
      dropSchema: false,
      synchronize: true,
      logging: true,
      migrationsTableName: 'migrations_history',
      migrationsRun: true,
    };
  },
};
