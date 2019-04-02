import { Controller, Get } from '@nestjs/common';

@Controller('v1/ready')
/// Used by probes to see when the service is up
export class ReadyController {
  @Get()
  async submitLog() {
    return;
  }
}
