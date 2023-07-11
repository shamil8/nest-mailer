export interface SimpleMailInterface {
  from?: string;
  to: string | string[];
  subject: string;
  text: string;
}
