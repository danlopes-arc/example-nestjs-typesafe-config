import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from 'src/app-config/env';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get<TKey extends keyof Env>(variable: TKey): Env[TKey] {
    return this.configService.get<Env[TKey]>(variable)!;
  }
}
