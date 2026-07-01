import { Injectable, NotFoundException } from '@nestjs/common';
import { Item, ItemStatus } from '../../generated/prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prismaService: PrismaService) {}

  private items: Item[] = [];

  async findAll(): Promise<Item[]> {
    return await this.prismaService.item.findMany();
  }

  findById(id: string): Item | undefined {
    const found = this.items.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const { name, price, description } = createItemDto;
    return await this.prismaService.item.create({
      data: {
        name,
        price,
        description,
        status: ItemStatus.ON_SALE,
      },
    });
  }

  // TODO: 修正
  // updateStatus(id: string): Item | undefined {
  //   const item = this.findById(id);
  //   if (item) item.status = 'SOLD OUT';
  //   return item;
  // }

  delete(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
