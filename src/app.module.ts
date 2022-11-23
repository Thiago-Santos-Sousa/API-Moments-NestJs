import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateModule } from './modules/momentsModule/create.module';
import { DeleteModule } from './modules/momentsModule/delete.module';
import { ReadModule } from './modules/momentsModule/read.module';
import { UpdateModule } from './modules/momentsModule/update.module';

@Module({
  imports: [CreateModule, ReadModule, UpdateModule, DeleteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
