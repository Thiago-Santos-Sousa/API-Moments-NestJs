import { Module } from '@nestjs/common';
import { DeleteController } from '../../controllers/momentsController/delete.controller';
import { DeleteService } from '../../services/momentsService/delete.service';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [DeleteController],
  providers: [DeleteService, PrismaService],
})
export class DeleteModule {}