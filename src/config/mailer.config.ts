import { ConfigService } from '@nestjs/config';

import { MailerConfigInterface } from '../interfaces/mailer-config.interface';

export const mailerConfig = (
  configService: ConfigService,
): MailerConfigInterface => ({
  transport: {
    host: configService.getOrThrow('MAILER_HOST'),
    port: configService.get<number>('MAILER_PORT', 587),
    secure: false,
    auth: {
      user: configService.getOrThrow('MAILER_USER'),
      pass: configService.getOrThrow('MAILER_PASSWORD'),
    },
  },
  defaults: {
    from: `<${
      configService.get('MAILER_FROM') ||
      configService.getOrThrow('MAILER_USER')
    }>`,
  },
});
