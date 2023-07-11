import { Injectable } from '@nestjs/common';
import { MailerService as CoreMilerService } from '@nestjs-modules/mailer';
import { ISendMailOptions } from '@nestjs-modules/mailer/dist/interfaces/send-mail-options.interface';
import { LoggerService } from '@app/logger/services/logger.service';
import { SentMessageInfo } from 'nodemailer';

import { SimpleMailInterface } from '../interfaces/simple-mail.interface';

@Injectable()
export class MailerService {
  constructor(
    private readonly logger: LoggerService,
    private readonly mailer: CoreMilerService,
  ) {}

  sendMail(sendMailOptions: ISendMailOptions): Promise<SentMessageInfo> {
    return this.mailer.sendMail(sendMailOptions);
  }

  async sendSimpleMail(data: SimpleMailInterface): Promise<void> {
    try {
      await this.mailer.sendMail({
        to: data.to,
        subject: data.subject,
        html: `<strong>${data.text}</strong>.`,
        ...(data.from ? { from: data.from } : {}),
      });
    } catch (err) {
      this.logger.error('Error, can not send message', {
        extra: err,
        stack: this.sendSimpleMail.name,
        data,
      });
    }
  }
}
