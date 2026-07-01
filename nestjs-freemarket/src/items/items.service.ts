import { Injectable, NotFoundException } from '@nestjs/common';
import { Item, ItemStatus } from '../../generated/prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prismaService: PrismaService) {}

  // Note: prisma導入で不要に
  // private items: Item[] = [];

  async findAll(): Promise<Item[]> {
    return await this.prismaService.item.findMany();
  }

  async findById(id: string): Promise<Item | undefined> {
    const found = await this.prismaService.item.findUnique({
      where: {
        id,
      },
    });

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

  async updateStatus(id: string): Promise<Item | undefined> {
    return this.prismaService.item.update({
      data: { status: 'SOLD_OUT' },
      where: { id },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.item.delete({
      where: { id },
    });
  }
}
