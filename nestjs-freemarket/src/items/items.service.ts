import { Injectable } from '@nestjs/common';
import type { Item } from './items.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }
}
