import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '../../generated/prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { AuthGuard } from '@nestjs/passport';

import { Request as ExpressRequest } from 'express';
import { RequestUser } from 'src/types/requestUser';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Item | undefined> {
    return await this.itemsService.findById(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Body() createItemDto: CreateItemDto,
    @Req() req: ExpressRequest & { user: RequestUser },
  ): Promise<Item> {
    console.log('req-user---------', req.user);
    return await this.itemsService.create(createItemDto, req.user.id);
  }

  @Put(':id')
  async updateStatus(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Item | undefined> {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return await this.itemsService.delete(id);
  }
}
