import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemsEntity } from '../entities/item.entity';
import { CreateItemDto } from './dto/createItem.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemsEntity)
    private readonly itemRepository: Repository<ItemsEntity>,
  ) {}

  async getItemsById(itemId: string) {
    return this.itemRepository.findOne({ where: { itemId } });
  }

  async createItem(createItemDto: CreateItemDto) {
    const createItem = this.itemRepository.create(createItemDto);
    return this.itemRepository.save(createItem);
  }
}
