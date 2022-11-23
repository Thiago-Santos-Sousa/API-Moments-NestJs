import { Injectable } from '@nestjs/common';
import { CreateDTO } from '../../dto/moments.dto/create.dto';
import { PrismaService } from '../../database/PrismaService';

@Injectable()
export class UpdateService {
  constructor(private prisma: PrismaService) {}

  async update(id: string, data: CreateDTO) {

    const createExists = await this.prisma.moment.findUnique({
      where: {
        id,
      },
    });

    if(!createExists) {
      throw new Error('Esse momento não existe!');
    }

    return await this.prisma.moment.update({
      data,
      where: {
        id,
      },
    });
  }
}