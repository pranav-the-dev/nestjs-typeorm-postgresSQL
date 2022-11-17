import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemsEntity } from './entity/item.entity';
import { CreateItemDto } from './dto/createItem.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemsEntity)
    private readonly itemRepository: Repository<ItemsEntity>
  ) {}

  async getItemsById(itemId: string) {
    return this.itemRepository.findOne({ where: { itemId } });
  }

  async createItem(createItemDto: CreateItemDto) {
    try {
      const createItem = this.itemRepository.create(createItemDto);
      const savedItem = this.itemRepository.save(createItem);
      return { statusCode: 200, message: 'Item Save successfully', savedItem };
    } catch (error) {
      console.log(':::::::::::::::::::: ItemsService ~ createItem ~ error ::::::::::::::::::::', error);
    }
  }
}
