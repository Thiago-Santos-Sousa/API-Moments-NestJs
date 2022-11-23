import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateService } from '../../services/momentsService/update.service';
import { CreateDTO } from '../../dto/moments.dto/create.dto';


@Controller('moments')
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}


    @Put(":id")
    async update(@Param("id") id: string, @Body() data: CreateDTO) {
    return this.updateService.update(id, data);
  }
}
