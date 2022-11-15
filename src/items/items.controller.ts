import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateItemDto } from './dto/createItem.dto';
import { ItemsService } from './items.service';

@Controller('/items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get('getItemsById/:id')
  getItemsById(@Param('itemId') itemId: string) {
    return this.itemService.getItemsById(itemId);
  }

  @Post('/createItem')
  @UsePipes(ValidationPipe)
  createItem(@Body() createItemDto: CreateItemDto) {
    return this.itemService.createItem(createItemDto);
  }
}
