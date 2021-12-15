import { IsNumber, IsString } from 'class-validator';

export class AppConfig {
  @IsNumber()
  PORT!: number;

  @IsString()
  GREETING!: string;
}
