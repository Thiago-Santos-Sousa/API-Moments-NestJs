import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';

@Injectable()
export class ReadService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.moment.findMany();
  }
}