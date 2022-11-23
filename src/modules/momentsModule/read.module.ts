import { Module } from "@nestjs/common";
import { ReadController } from "../../controllers/momentsController/read.controller";
import { ReadService } from "../../services/momentsService/read.service";
import { PrismaService } from "../../database/PrismaService";

@Module({
  controllers: [ReadController],
  providers: [ReadService, PrismaService],
})
export class ReadModule {}