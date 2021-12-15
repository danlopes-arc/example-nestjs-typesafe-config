import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from 'src/app-config/app-config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get<TKey extends keyof AppConfig>(variable: TKey): AppConfig[TKey] {
    return this.configService.get<AppConfig[TKey]>(variable)!;
  }
}
