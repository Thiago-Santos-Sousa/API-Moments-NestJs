import { Controller, Get } from '@nestjs/common';
import { ReadService } from '../../services/momentsService/read.service';

@Controller('moments')
export class ReadController {
  constructor(private readonly readService: ReadService) { } 

    @Get()
    async findAll() {
      return this.readService.findAll();
    }
  }

