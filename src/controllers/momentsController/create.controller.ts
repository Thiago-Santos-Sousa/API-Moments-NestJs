import { Body, Controller, Post } from "@nestjs/common";
import { CreateDTO } from "../../dto/moments.dto/create.dto";
import { CreateService } from '../../services/momentsService/create.service';

@Controller('moments')
export class CreateController {
  constructor(private readonly createService: CreateService) {}

  @Post()
  async create(@Body() data: CreateDTO) {
    return this.createService.create(data);
  }
}