import { Controller, Get } from '@nestjs/common';
import { AppConfigService } from './app-config/app-config.service';

@Controller()
export class AppController {
  constructor(private readonly appConfigService: AppConfigService) {}

  @Get()
  getHello(): string {
    return this.appConfigService.get('GREETING');
  }
}
