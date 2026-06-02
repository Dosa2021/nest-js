import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'generated/prisma/browser';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAuthDto: CreateUserDto): Promise<User> {
    const { name, email, password, status } = createAuthDto;
    return this.prismaService.user.create({
      data: {
        name,
        email,
        password,
        status,
      },
    });
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }
  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }
  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
