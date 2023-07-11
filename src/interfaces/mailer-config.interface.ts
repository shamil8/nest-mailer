export interface MailerConfigInterface {
  transport: {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
  };
  defaults?: {
    from: string;
  };
}
