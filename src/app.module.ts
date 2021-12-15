import { Module } from '@nestjs/common';
import { AppConfigModule } from './app-config/app-config.module';
import { AppController } from './app.controller';

@Module({
  imports: [AppConfigModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
