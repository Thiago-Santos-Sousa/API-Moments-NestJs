import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { UpdateController } from '../../controllers/momentsController/update.controller';
import { UpdateService } from '../../services/momentsService/update.service';

@Module({
  controllers: [UpdateController],
  providers: [UpdateService, PrismaService],
})
export class UpdateModule {}