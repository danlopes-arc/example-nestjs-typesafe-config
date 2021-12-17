import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { parseEnv } from 'src/app-config/parse-env';
import { AppConfigService } from './app-config.service';

@Module({
  imports: [ConfigModule.forRoot({ validate: parseEnv })],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
