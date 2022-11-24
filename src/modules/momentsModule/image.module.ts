import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { ImageController } from '../../controllers/momentsController/image.controller';
import { ImageService } from '../../services/momentsService/image.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService, PrismaService],
})
export class ImageModule {}
