import { Controller, Param, Patch, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from '../../shared/helper';
import { ImageService } from '../../services/momentsService/image.service';

@Controller('moments')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Patch(":id/image")
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './upload/image',
      filename: Helper.customFilename,
    })
  }))

  updateImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ){
    return this.imageService.update(id, file.path);
  }
}