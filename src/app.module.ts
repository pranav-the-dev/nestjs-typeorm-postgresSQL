import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmAsyncConfig } from '../typeorm-config';
import { ItemsEntity } from './items/entities/item.entity';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';
import { ItemsService } from './items/items.service';
import { UsersEntity } from './users/entities/users.entity';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([ItemsEntity, UsersEntity]),
    ItemsModule,
    UsersModule,
  ],
  controllers: [AppController, ItemsController, UsersController],
  providers: [AppService, ItemsService, UsersService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
