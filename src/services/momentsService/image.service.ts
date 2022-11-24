import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/PrismaService";
import { CreateDTO } from "../../dto/moments.dto/create.dto";

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}

  async update(id: string, data: string) {

    const updateImage = await this.prisma.moment.findFirst({
      where: {
        id,
      },
    });

    if(updateImage.image == null || updateImage.image == ''){

       return await this.prisma.moment.update({
        data,
        where: {
          id,
        },
      });
    }
  }
}
