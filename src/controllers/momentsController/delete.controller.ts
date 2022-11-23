import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteService } from '../../services/momentsService/delete.service';

@Controller('moments')
export class DeleteController {
  constructor(private readonly deleteService: DeleteService) {}

  @Delete(":id")
  async delete(@Param('id') id: string) {
    return this.deleteService.delete(id);
  }
}
