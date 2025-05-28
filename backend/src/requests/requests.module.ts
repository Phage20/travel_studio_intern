import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'; 
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';

@Module({
  controllers: [RequestsController],
  providers: [RequestsService],
  imports: [PrismaModule], 
  exports: [RequestsService],
})
export class RequestsModule {}
