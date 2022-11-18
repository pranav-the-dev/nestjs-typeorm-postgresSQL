import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemsController } from '../items/items.controller';
import { ItemsService } from '../items/items.service';
import { ItemsEntity } from './entities/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsEntity]), ItemsModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
