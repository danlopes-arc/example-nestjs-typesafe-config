import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfigTransformate } from 'src/app-config/app-config.transformate';
import { AppConfigService } from './app-config.service';

@Module({
  imports: [ConfigModule.forRoot({ validate: appConfigTransformate })],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
