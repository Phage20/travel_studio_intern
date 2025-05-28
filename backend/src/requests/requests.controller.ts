import { Controller, Get, Post, Body } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('api/requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  // POST: /api/requests
  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestsService.create(createRequestDto);
  }

  // GET: /api/requests
  @Get()
  findAll() {
    return this.requestsService.findAll();
  }
}
