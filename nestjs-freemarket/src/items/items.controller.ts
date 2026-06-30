import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '../../generated/prisma/client';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): Item | undefined {
    return this.itemsService.findById(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }

  // TODO: 修正
  // @Put(':id')
  // updateStatus(@Param('id', ParseUUIDPipe) id: string): Item | undefined {
  //   return this.itemsService.updateStatus(id);
  // }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    return this.itemsService.delete(id);
  }
}
