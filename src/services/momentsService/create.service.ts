import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/PrismaService";
import { CreateDTO } from "../../dto/moments.dto/create.dto";

@Injectable()
export class CreateService {

  constructor(private prisma: PrismaService) {}

  async create(data: CreateDTO) {

    const createExists = await this.prisma.moment.findFirst({
      where: {
        title: data.title,
      },
    });

    if(createExists) {
      throw new Error('Este título já existe!');
    }

    const create = await this.prisma.moment.create({
      data,
    });
    return create;
  }
}