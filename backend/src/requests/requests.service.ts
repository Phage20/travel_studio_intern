import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateRequestDto } from './dto/create-request.dto';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateRequestDto) {
    return this.prisma.request.create({
      data: {
        guestPhone: dto.guestPhone,
        requestText: dto.requestText,
      },
    });
  }


  findAll() {
    return this.prisma.request.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
