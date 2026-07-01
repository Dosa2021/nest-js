// Note: Prisma実装により不要
export interface Item {
  id: string;
  name: string;
  price: number;
  description?: string;
  //   Note: union型
  status: 'ON SALE' | 'SOLD OUT';
}
