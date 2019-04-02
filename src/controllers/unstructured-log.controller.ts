import { Controller, Post, Body } from '@nestjs/common';
import { UnstructuredLogDto } from '../dtos/unstructured-log';
import { UnstructuredLogService } from '../services/unstructured-log.service';

@Controller('v1/unstructured')
/// The endpoint for unstructured logs
export class UnstructuredLogController {
  constructor(
    private readonly unstructuredLogService: UnstructuredLogService,
  ) { }

  @Post()
  async submitLog(@Body() logs: UnstructuredLogDto) {
    this.unstructuredLogService.sendLogs(logs);
  }
}
