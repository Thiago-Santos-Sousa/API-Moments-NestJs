import { Module } from '@nestjs/common';
import { CreateService } from '../../services/momentsService/create.service';
import { CreateController } from '../../controllers/momentsController/create.controller';
import { PrismaService } from "../../database/PrismaService";

@Module({
  controllers: [CreateController],
  providers: [CreateService, PrismaService],
})
export class CreateModule {}