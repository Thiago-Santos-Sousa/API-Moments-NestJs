import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';

@Injectable()
export class DeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const createExists = await this.prisma.moment.findUnique({
      where: {
        id,
      },
    });

    if(!createExists) {
      throw new Error('Esse momento não existe!')
    }

    return await this.prisma.moment.delete({
      where: {
        id,
      },
    });
  }
}