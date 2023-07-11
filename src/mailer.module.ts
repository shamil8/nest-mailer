import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { MailerModule as CoreMailerModule } from '@nestjs-modules/mailer';
import { LoggerModule } from '@app/logger/logger.module';

import { mailerConfig } from './config/mailer.config';
import { MailerService } from './services/mailer.service';

@Module({
  imports: [
    CoreMailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => mailerConfig(config),
    }),
    LoggerModule,
  ],
  providers: [MailerService],
  exports: [MailerService],
})
export class MailerModule {}
